import drug from '../data/drug/drug.json';

// Drug details
function getDrug(drugId) {
    return drug.filter(post => { return post.drugId === parseInt(drugId) })[0];
}
// Filter 
// function getFilteredPosts(posts, filter = { cat: '' }) {
//     var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
//     // Category filter
//     if (catgoryFilter) {
//         posts = posts.filter(post => {
//             return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
//         })
//     } 
//     return posts;
// }
// export { getDrug, getFilteredPosts };
export { getDrug};