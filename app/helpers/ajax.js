export async function  ajax(props){
    let {url, success,error} = props;

    try{
        const res = await fetch(url),
        json = await res.json();
        if(!res.ok) throw {status:res.status, statusText:res.statusText};
        success(json)
    }catch(err){
        error(err);
    }

}