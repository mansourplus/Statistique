import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { ApiResponseModel } from '../models/api-response-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CaseByCountry } from '../models/api-p-response';
import  country_flag from  '../../../assets/countryflags.json';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  endpoint = environment.data_url_old;
  hostOld=environment.data_host_old;
  apikeyOld=environment.data_api_key_old;
  worldStatsEndpoint = environment.world_stats_url_old;
  news_url = environment.news_url;
  headers:{header:{}};
  country="?country=France";

  observable:Observable<CaseByCountry>;

  constructor(private http: HttpClient) { }

  getStatOld():Observable<ApiResponseModel>
  {
    var headers=this.getHeadersOld();
    return this.http.get<ApiResponseModel>(this.endpoint+this.country,{headers}).pipe(shareReplay(1));
  }

  private getHeadersOld():HttpHeaders
  {
    let headers = new HttpHeaders();
    headers = headers.set('x-rapidapi-host', this.hostOld);
    headers = headers.set('x-rapidapi-key', this.apikeyOld);
    return headers;
  }

  getStat():Observable<CaseByCountry>
  {
    if (this.observable) {
      return this.observable;
    }
    else {
      var country=country_flag;
      var headers=this.getHeaders();
      this.observable = this.http.get<CaseByCountry>(environment.data_url,{headers})
      .pipe(
        map(c=>
          {
            if(country)
            {
              c.countries_stat.forEach(e => {
                var cn=country.filter(item => item.fields.country.toLowerCase().startsWith(e.country_name.toLowerCase()));
                if(cn && cn.length>0)
                {
                  e.country_flag="https://www.countryflags.io/"+cn[0]?.fields?.a2_iso?.toLowerCase()+"/shiny/64.png"
                }
              });
            }
            return c
          }
          )
      );
      ;
      return this.observable;
    }
  }

  private getHeaders():HttpHeaders
  {
    let headers = new HttpHeaders();
    headers = headers.set('observe', 'response');
    headers = headers.set('x-rapidapi-host', environment.data_host);
    headers = headers.set('x-rapidapi-key', environment.data_api_key);
    return headers;
  }
}
