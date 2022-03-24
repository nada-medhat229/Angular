import { Location } from "@angular/common";
import { fakeAsync, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HomeComponent } from "./home/home.component";
import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";

describe('testing app routing', () => {
  let location:Location;
  let router:Router;
  let fixture;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routes)],
      declarations:[
        HomeComponent,
        ContactusComponent,
        AboutComponent,
        AppComponent
      ]
    });
    router=TestBed.get(Router);
    location=TestBed.get(Location);
    fixture=TestBed.createComponent(AppComponent);
    router.initialNavigation();
  })

  it('navigate to home',fakeAsync(()=>{
router.navigate(['']).then(()=>{
  expect(location.path()).toBe('/home')
})
  }))
  it('navigate to contactus',fakeAsync(()=>{
    router.navigate(['contantus']).then(()=>{
      expect(location.path()).toBe('/contantus')
    })
      }))
      it('navigate to about',fakeAsync(()=>{
        router.navigate(['about']).then(()=>{
          expect(location.path()).toBe('/about')
        })
          }))
});
