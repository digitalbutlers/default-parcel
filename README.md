# Parcel configuration
> Default parcel configuration using in [DigitalButlers](https://digitalbutlers.me/).

## How to use

### Installation
Install packages using `npm install` command.

### Development
Use `npm run serve` to run local server. It's http://localhost:3000 by default.

#### Local network sharing
If you want to share project using local network you need to know your IPv4-address.
To find it out you can run `Ipconfig` in your terminal.
Then just replace 'localhost' with 'your_ipv4_address'.

You must get something like that: http://192.168.21.118:3000.

### Production
Run `npm run build` to get build project within minified `.html`, `.css` and `.js` files or
`npm run build-no-minify` to build project without minifying above-mentioned files.

All the files are stored at `/build/` folder.

### Linting

#### Javascript
- `npm run lint-js` to see all issues ESLint has found.
- `npm run lint-js-fix` to fix all fixable issues ESLint can fix.

#### Sass (Scss)
- `npm run lint-scss` to see all issues Stylelint has found.
- `npm run lint-scss-fix` to fix all fixable issues Stylelint can fix.

## Issues
If you find an issue, please, inform us using [GitHub Issues](https://github.com/digitalbutlers/default-parcel/issues).

## License
MIT

Copyright © 2021 [DigitalButlers](https://digitalbutlers.me/)
