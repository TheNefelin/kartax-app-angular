import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { GroupService } from '@features/groups/services/group-service';
import { map } from 'rxjs';
import { MessageErrorComponent } from "@shared/components/message-error-component/message-error-component";
import { LoadingComponent } from "@shared/components/loading-component/loading-component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-group-list-page',
  imports: [
    JsonPipe,
    MessageErrorComponent, 
    LoadingComponent
  ],
  templateUrl: './group-list-page.html',
})
export class GroupListPage {
  private readonly groupService = inject(GroupService);

  private readonly dataRX = rxResource({
    stream: () => {    
      return this.groupService.getAll().pipe(
        map(response => {
          if (!response.isSuccess) throw new Error(response.message);
  
          return response.result; 
        })
      );
    },
  });

  readonly isLoading = this.dataRX.isLoading;

  readonly errorMessage = computed(() => {
    const backendError = this.dataRX.error()?.message;
    if (backendError) return backendError;

    return null;
  });

  readonly dataComputed = computed(() => {
    const data = this.dataRX.value();
    if (!data) return [];

    return data;
  });
}
