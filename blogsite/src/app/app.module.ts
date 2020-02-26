import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './components/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewPostComponent,
    PostListComponent,
    HomeComponent,
    EditPostComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
