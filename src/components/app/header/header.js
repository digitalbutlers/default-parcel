import './header.scss';
import test from '../../../../public/test.json';


// scope to avoid conflicts
{
	// use root as you usually use document
	const root = document.querySelector('.app-header');
	// eslint-disable-next-line no-console
	console.log(root, test);
}
