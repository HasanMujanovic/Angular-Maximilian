import { NgModule } from '@angular/core';
import { ShopingListService } from './shopping-list/shopingList.service';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthIncterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  providers: [
    ShopingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIncterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
