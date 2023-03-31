class RepositoriesController{
    constructor(){}    
    static toTimestamp(strDate){
        var datum = Date.parse(strDate);
        return datum/1000;
    }
    static orderByPush(){
        let ascOrder = reposRobertoSm822.sort( function ( a, b ) { console.log(toTimestamp(b.pushed_at)); return toTimestamp(b.pushed_at) - toTimestamp(a.pushed_at); } );
        ascOrder = ascOrder.reverse();
        let html = RepositoriesController.showHtmlUl(ascOrder);
        jQuery("#prository-list").html(html);
        //console.log(ascOrder);
        return ascOrder;
    }
    static orderByPushDesc(){
        let ascOrder = reposRobertoSm822.reverse( function ( a, b ) {  return toTimestamp(b.pushed_at) - toTimestamp(a.pushed_at); } );
        //ascOrder = ascOrder.reverse();
        let html = RepositoriesController.showHtmlUl(ascOrder);
        jQuery("#prository-list").html(html);
        //console.log(ascOrder);
        return ascOrder;
    }
    static orderDesc(data){
        let descOrder = reposRobertoSm822.sort().reverse();
        let html = RepositoriesController.showHtmlUl(descOrder);
        jQuery("#prository-list").html(html);
        //console.log(descOrder);
        return descOrder;
    }
    static localeDate(data){
        var d = new Date(data); 
        //console.log( d.toLocaleString() ); 
        return d.toLocaleString();
    }
    static showHtmlUl(dados){
        
        let htmlListRepos = `<ul class="list-group">`;
            for(let i=0; i < dados.length; i++){
                htmlListRepos += `<li class="list-group-item">
                    <b>Name:</b> ${dados[i].name}<br>
                    <b>Full Name: </b>${dados[i].full_name}<br>
                    <b>Link Repo: </b><a href="${dados[i].html_url}" target="_blank">${reposRobertoSm822[i].html_url}</a><br>
                    <b>Description: </b>${dados[i].description}<br>
                    <b>Último Push: </b>${RepositoriesController.localeDate(dados[i].pushed_at)}
                </li>`; 
                
            }
            htmlListRepos += `<ul>`;
        return htmlListRepos;
    }
    static searchRepos(_this){
        //console.log(_this.value);
        // resgatar o array das keys
        var keys = Object.keys( reposRobertoSm822 );
    
        // Classifique as chaves em ordem decrescente
        keys.sort( function ( a, b ) { return b - a; } );
    
        let newRepoSearch = [];
        // Percorra a matriz de chaves e acesse as propriedades do objeto correspondente
        for ( var i = 0; i < keys.length; i++ ) {
            if(reposRobertoSm822[ keys[i] ].name.includes(_this.value) ){
                newRepoSearch.push(reposRobertoSm822[ keys[i] ]);   
            }
        }
        //rendenrizar a tela com a busca sugestionada
        let html = RepositoriesController.showHtmlUl(newRepoSearch);
        jQuery("#prository-list").html(html);
        jQuery("#total-repos").html(newRepoSearch.length);
     
    }
}
// Iniciar listagem de repositorios
function initHtml(){
    let htmlListRepos = `<ul class="list-group">`;
    for(let i=0; i < reposRobertoSm822.length; i++){
        htmlListRepos += `<li class="list-group-item">
            <b>Nome do repositório:</b> ${reposRobertoSm822[i].name}<br>
            <b>Nome completo: </b>${reposRobertoSm822[i].full_name}<br>
            <b>Link do repositório: </b><a href="${reposRobertoSm822[i].html_url}" target="_blank">${reposRobertoSm822[i].html_url}</a><br>
            <b>Descrição: </b>${reposRobertoSm822[i].description}<br>
            <b>Último Push: </b>${RepositoriesController.localeDate(reposRobertoSm822[i].pushed_at.toLocaleString())}
        </li>`; 
        
    }
    htmlListRepos += `<ul>`;
    jQuery(document).ready(function() {    
        jQuery("#prository-list").html(htmlListRepos);
        jQuery("#total-repos").html(reposRobertoSm822.length);
    });
}