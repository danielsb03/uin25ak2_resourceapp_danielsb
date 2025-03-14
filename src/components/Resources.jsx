


export default function Resources ({innhold, setInnhold}){
    const resources = [
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/html/",
          category: "html",
        },
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/css/",
          category: "css",
        },
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/js/",
          category: "javascript",
        },
        {
          title: "W3Schools",
          url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
          category: "react",
        },
        {
          title: "HTML Living standard",
          url: "https://html.spec.whatwg.org/multipage/",
          category: "html",
        },
        {
          title: "HTML.com Tutorials",
          url: "https://html.com/",
          category: "html",
        },
        {
          title: "W3C HTML & CSS Standards",
          url: "https://www.w3.org/standards/webdesign/htmlcss.html",
          category: "css",
        },
        {
          title: "W3C CSS Validator",
          url: "https://jigsaw.w3.org/css-validator/",
          category: "css",
        },
        {
          title: "CSS Tricks",
          url: "https://css-tricks.com/",
          category: "css",
        },
        {
          title: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          category: "javascript",
        },
        {
          title: "How to read JavaScript Documentation",
          url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
          category: "javascript",
        },
        {
          title: "React documentation",
          url: "https://reactjs.org/docs/getting-started.html",
          category: "react",
        },
        {
          title: "Sanity documentation",
          url: "https://www.sanity.io/docs",
          category: "headless-cms",
        },
        {
          title: "OnCrawl: a beginners guide to headless CMS",
          url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/",
          category: "headless-cms",
        },
        {
          title: "Section.io: Getting started with Sanity CMS",
          url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/",
          category: "headless-cms",
        },
      ];
        
        let content = resources
            .filter(resource => resource.category === category)
            .map(resource => `
                <h1>${resource.category}</h1>
                <p>${resource.text}</p>
                <ul id="linker">
                    ${resource.sources
                        .map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`)
                        .join("")
                    }
                </ul>
            `)
            .join("");
    return (
            <article id="info"> 
            {content}
        
    </article>
      
        
    );
}