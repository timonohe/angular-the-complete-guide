import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'routing-showcase-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);

    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })
    this.route.data.subscribe((data: Data) => this.server = data['server']);
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }
}
