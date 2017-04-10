import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "The Godfather Waltz", "19SehpX8IWA", "The Godfather Waltz (piano solo)"),
            new Video(2, "The Godfather - Love theme", "2NAhA3YabSc", "The Godfather - Love theme (piano solo)")
        ]
    }
}
