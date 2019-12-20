import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exemple1',
    pathMatch: 'full'
  },
  {
    path: 'exemple1',
    loadChildren: () => import('./exemple1/exemple1.module').then( m => m.Exemple1PageModule)
  },
  {
    path: 'exemple3',
    loadChildren: () => import('./exemple3/exemple3.module').then( m => m.Exemple3PageModule)
  },
  {
    path: 'exo1',
    loadChildren: () => import('./exo1/exo1.module').then( m => m.Exo1PageModule)
  },
  {
    path: 'exemple4',
    loadChildren: () => import('./exemple4/exemple4.module').then( m => m.Exemple4PageModule)
  },
  {
    path: 'exemple5',
    loadChildren: () => import('./exemple5/exemple5.module').then( m => m.Exemple5PageModule)
  },
  {
    path: 'exemple6',
    loadChildren: () => import('./exemple6/exemple6.module').then( m => m.Exemple6PageModule)
  },
  {
    path: 'exo2',
    loadChildren: () => import('./exo2/exo2.module').then( m => m.Exo2PageModule)
  },
  {
    path: 'exemple7',
    loadChildren: () => import('./exemple7/exemple7.module').then( m => m.Exemple7PageModule)
  },
  {
    path: 'exo3',
    loadChildren: () => import('./exo3/exo3.module').then( m => m.Exo3PageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
