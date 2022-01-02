<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./projects/ngx-caching/assets/browser-settings.png" alt="Project logo"></a>
</p>

<h3 align="center">ngx-utils</h3>

<div align="center">

  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>


<p align="center"> 
Angular library that enables developer accessible browser caching by providing a CacheService and a HttpCacheService.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This Angular library provides two services:
 - CacheService: which interacts directly with the browser local/session storage
 - HttpCacheService: which is a wrapper(decorator) around Angular HttpClient that offers the ability to cache any request that you want to (including post request) and offers the results as a Observable of the desired type, exactly as HttpClient.

## 🏁 Getting Started <a name = "getting_started"></a>
To use this library you should have at least Angular 13. Installation of this library can be done using the following commands, depending on your package manager.

- npm: ```npm i ngx-caching```
- yarn ```yarn add ngx-caching```

## 🎈 Usage <a name="usage"></a>

The following is a basic usage example of the HttpCacheService:

```typescript
...
import {HttpCacheService} from "ngx-caching";
...

constructor(private configService: ConfigService, private httpCached: HttpCacheService) { }

getValuesByType(typeId: number):Observable<any> {
 return this.httpCached.get(this.configService.getPath('dictionary', 'entries', {typeId}));
}
```
In the above example, the values that will be retrieved will also be cached, so any subsequent subscription to this method will result in a cache look-up rather than another HTTP request.


## ⛏️ Built Using <a name = "built_using"></a>
- [RxJS](https://rxjs.dev/) - Reactive Extensions Library for JavaScript
- [Angular CLI](https://angular.io/cli) - Angular command line interface
- [Visual Studio Code](https://code.visualstudio.com/) - code editor


## ✍️ Authors <a name = "authors"></a>
- [@gabriel-rusu](https://github.com/gabriel-rusu) - Idea & Initial work

