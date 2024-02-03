import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoteboxComponent } from './components/notebox/notebox.component';
import { MusicListComponent } from './components/music/music-list/music-list.component';
import { MusicNoteComponent } from './components/music/music-note/music-note.component';
import { ComposersListComponent } from './components/music/composers-list/composers-list.component';
import { LyricistsComponent } from './components/music/composers/lyricists/lyricists.component';
import { LyricistComponent } from './components/music/composers/lyricist/lyricist.component';
import { MusicTypeComponent } from './components/music/music-type/music-type.component';
import { MusicTypesComponent } from './components/music/music-types/music-types.component';
import { EditCompositionComponent } from './components/music/edit-composition/edit-composition.component';
import { TypeListComponent } from './components/music/type-list/type-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MusicAppInterceptor } from './services/music-app.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { CompositionServiceService } from './services/composition-service.service';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateCompositionComponent } from './components/music/create-composition/create-composition.component';
import { DbStatisticsComponent } from './components/music/db-statistics/db-statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    NoteboxComponent,
    MusicListComponent,
    MusicNoteComponent,
    LyricistsComponent,
    LyricistComponent,
    MusicTypeComponent,
    MusicTypesComponent,
    EditCompositionComponent,
    TypeListComponent,
    LoginComponent,
    LogoutComponent,
    CreateCompositionComponent,
    ComposersListComponent,
    DbStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService,
    AuthGuard,
    CompositionServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MusicAppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
