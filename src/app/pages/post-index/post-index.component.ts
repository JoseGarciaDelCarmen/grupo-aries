import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
	selector: 'app-post-index',
	templateUrl: './post-index.component.html',
	styleUrls: ['./post-index.component.scss']
})
export class PostIndexComponent implements OnInit {

	posts: any[] = [];

	constructor(
		private postsService: PostsService,
	) { }

	ngOnInit(): void {
		this.getPosts();
	}



  	getPosts() {
		this.postsService.getPosts().subscribe(
			(res: any) => {
				this.posts = res.data;
			},
			err => {
				window.alert("No se pudierón obtener las publicaciones, intenta de nuevo.")
			}
		);
	}

}
