import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class CalculatorRepository {
  private addUrl: string;
  private subtractUrl: string;

  constructor(private http: HttpClient) {
    // would abstract these to a config with more time/more URLs
    this.addUrl = 'http://localhost:5000/api/simplecalculator/add?';
    this.subtractUrl = 'http://localhost:5000/api/simplecalculator/subtract?';
  }

  /**
   *
   * @param start Starting number to add to
   * @param amount Amount to add
   * @returns Number observable of result
   */
  public add(start: number, amount: number): Observable<number> {
    const body = {
      Start: start,
      Amount: amount,
    };

    return this.http.post<number>(this.addUrl, body).pipe(
      map((value): number => {
        return value;
      })
    );
  }

  /**
   *
   * @param start Starting number to add to
   * @param amount Amount to subtract
   * @returns Number observable of result
   */
  public subtract(start: number, amount: number): Observable<number> {
    const body = {
      Start: start,
      Amount: amount,
    };
    return this.http
      .post<number>(this.subtractUrl, body)
      .pipe(map((value): number => value));
  }
}
