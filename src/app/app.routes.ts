export const Routes = [{
	path: '', redirectTo: 'insecurity', pathMatch:'full'
}, {
	path: 'insecurity', loadChildren: './components/insecurity/insecurity.module#InsecurityModule'
}]