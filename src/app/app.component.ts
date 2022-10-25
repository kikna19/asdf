import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "./state/auth.reducer";
import {Store} from "@ngrx/store";
import * as PostActions from './state/auth.actions'

interface AppState {
  post: Post,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex';
  post!: Observable<Post>;
  text!: string;

  constructor(
    private store: Store<AppState>
  ) {
    this.post = this.store.select('post')
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  reset(){
    this.store.dispatch(new PostActions.Reset)
  }
  Up(){
    this.store.dispatch(new PostActions.Upvote)
  }

  Down(){
    this.store.dispatch(new PostActions.DownVote)
  }

}
