import { IconService } from './../../core/services/icon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { debounceTime, tap, map } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { FormControl } from '@angular/forms';
import { Covid19Model } from 'src/app/core/models/view-model';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit, OnDestroy {
  
  searchTerm: FormControl;
  districtData$:Observable<Covid19Model[]>;
  private subs = new SubSink();
  constructor(private httpService:HttpService, private iconService:IconService) { }

  ngOnInit(): void {
    this.iconService.setupCustomIcons();
    this.searchTerm = new FormControl();
    var data = this.httpService.getStat();
    this.districtData$ = data.pipe(map(states=>states.countries_stat.map(item=> new Covid19Model(
      item.region,
      item.region,
      item.country_name,
       states.statistic_taken_at,
       item.cases,
       item.active_cases,
       0,
       item.deaths,
       item.total_recovered,
       item.serious_critical,
       item.new_cases,
       item.new_deaths,
       item.country_flag))));
       this.listenToSearchInputAndFilterData();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  listenToSearchInputAndFilterData() {
    
    this.subs.add(
      this.searchTerm.valueChanges
        .pipe(
          debounceTime(500),
          tap(data => {
            this.districtData$ = this.httpService.getStat().pipe(
              map(states =>
                states.countries_stat.map(item=> new Covid19Model(
                  item.region,
                  item.region,
                  item.country_name,
                   states.statistic_taken_at,
                   item.cases,
                   item.active_cases,
                   0,
                   item.deaths,
                   item.total_recovered,
                   item.serious_critical,
                   item.new_cases,
                   item.new_deaths,
                   item.country_flag)).filter((item: Covid19Model) => {
                  return item.country.toLowerCase().startsWith(data.toLowerCase());
                })
              )
            );
          })
        )
        .subscribe()
    );
  }

}
