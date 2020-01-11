import Entities from 'html-entities';
const entities = new Entities.XmlEntities();

export interface AuthorAndTitle {
    author: string;
    title: string;
}


export function transformTitle(query: string): AuthorAndTitle {
    query = entities.decode(query);
    const queries = query.split('-');

    let author = queries[0].split('|')[0];
    let title = queries[1]
        ? queries[1]
            .replace(/\(.*?\)/g, '')
            .replace(/\[.*?\]/g, '')
            .split('|')[0]
        : '';
    return {
        author,
        title,
    };
}