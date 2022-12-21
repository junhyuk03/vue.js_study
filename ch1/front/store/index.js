export const state = () => ({
    name: 'posts',
});

export const mutations = {
    bye(state, payload) {
       state.name = 'by posts';
   }
};