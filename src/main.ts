import { platformNativeScriptDynamic, NativeScriptModule } from '@nativescript/angular';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as appSettings from "@nativescript/core/application-settings";
import { AppComponent } from './app.component';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { appComponents, appRoutes } from './app/app.routing';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ...appComponents],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
class AppComponentModule {}
global.apiUrl = 'http://10.171.82.20:8000/tienda/api/1.0/';

/* Before we bootstrap, shim the 'localStorage' API with application settings module */
global.localStorage = {
    getItem(key: string) {
        return appSettings.getString(key);
    },
    setItem(key: string, value: string) {
        return appSettings.setString(key, value);
    },
    length:0,
    clear(){
        return appSettings.clear();
    },
    key(index){
        return "";
    },
    removeItem(key){
        return appSettings.remove(key);
    }
}


platformNativeScriptDynamic().bootstrapModule(AppComponentModule)

