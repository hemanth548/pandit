import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-agentcategories',
  templateUrl: './agentcategories.component.html',
  styleUrls: ['./agentcategories.component.css']
})
export class AgentcategoriesComponent implements OnInit, OnDestroy {

  panelOpenState = false;

  resultt: any;
  term: any;
  p: any;
  loading = true;
  allCategoryLoading: boolean  = true;
  rc11: any;
  rc22: any;
  rc33: any;
  rc111: any;
  rc222: any;
  rc333: any;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private ht: HttpClient, private titleService: Title, private service: AuthService) {
    const newTitle = "Pooja Categories"
    this.titleService.setTitle(newTitle);
    let url: any = "http://192.168.1.55:3040/api/services/getCategory ";
    this.getCategories(url);

  }

  ngOnInit() {
    this.getPoojaCat();
    this.getYagnaCat();
    this.getKarmaCat();
  }

  getPoojaCat() {
    let r1: any;
    let rc1: any;

    this.service.getCategories(1001)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(resp => {
        r1 = resp,
          rc1 = r1.data,
          this.rc11 = rc1.slice(0, rc1.length / 2),
          this.rc111 = rc1.slice(rc1.length / 2, rc1.length)

      });
  }
  getYagnaCat() {
    let r2: any;
    let rc2: any;
    this.service.getCategories(1002)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(resp => {
        r2 = resp,
          rc2 = r2.data,
          this.rc22 = rc2.slice(0, rc2.length / 2),
          this.rc222 = rc2.slice(rc2.length / 2, rc2.length)
      });
  }
  getKarmaCat() {


    let r3: any;
    let rc3: any;
    this.service.getCategories(1003)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(resp => {
        r3 = resp,
          rc3 = r3.data,
          this.rc33 = rc3.slice(0, rc3.length / 2),
          this.rc333 = rc3.slice(rc3.length / 2, rc3.length),
          this.loading = false
      })
  }
  getCategories(url) {
    let resultt2: any;

    this.ht.get(url)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(resp => {
        resultt2 = resp;
        this.resultt = resultt2.data,
          this.allCategoryLoading = false
      })
  }
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
