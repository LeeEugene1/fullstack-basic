//로그인사용자 상태
export const state = () => ({
    email:null,
    nickname:null
})
export const mutations = {
    SET_USER(state,{email, nickname}){
        state.email = email;
        state.nickname = nickname;
    }
}//상태변화
export const actions = {}