import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from "./shopping/shopping.component";
import { ShoppinglistComponent } from "./shopping/shoppinglist/shoppinglist.component";
import { ShoppinglisteditComponent } from "./shopping/shoppinglistedit/shoppinglistedit.component";
import { RecipebookComponent } from "./recipebook/recipebook.component";
import { RecipelistComponent } from "./recipebook/recipelist/recipelist.component";
import { RecipeitemComponent } from "./recipebook/recipeitem/recipeitem.component";
import { RecipedetailComponent } from "./recipebook/recipedetail/recipedetail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipebookComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }