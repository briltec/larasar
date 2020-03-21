import { axiosInstance, locale } from 'boot/axios'
import { i18n } from 'boot/i18n'
import { Notify } from 'quasar'

export async function loginAction ({ commit, dispatch, getters }, payload) {
  const data = await axiosInstance.post('api/login', { ...{ locale: locale }, ...payload })
    .then(async response => {
      const token = response.data
      commit('loginMutation', { ...token, ...payload })
      let user = { ...await dispatch('authAction'), ...payload }
      let verifyEemail = process.env.MUST_VERIFY_EMAIL
      if (!user.email_verified_at & verifyEemail) { // Email Verification========================
        axiosInstance.post(`api/email/verify/${user.id}/${user.hash}?${user.query}`)// ToFix
          .then(rep => {
            Notify.create({
              color: 'positive',
              position: 'top',
              message: i18n.t(rep.data),
              icon: 'check'
            })
            this.$router.push({ path: '/' })
          })
          .catch(() => {
            if (confirm(i18n.t('verify_email_address') + '\n' + i18n.t('resend_verification_link')) === true) {
              axiosInstance.post('api/email/resend').then(() => {
                Notify.create({
                  color: 'positive',
                  position: 'top',
                  message: i18n.t('verify_email_address'),
                  icon: 'check'
                })
              }).catch(e => {
                Notify.create({
                  color: 'negative',
                  position: 'top',
                  message: e.response.data.message,
                  icon: 'report_problem'
                })
              })
            } dispatch('logoutAction')
          }); return
      }// ==============================================Email Verification End====================
      // Redirect home.
      this.$router.push({ path: '/' })
    })
  return data
}

export async function registerAction ({ commit, dispatch }, payload) {
  let url = payload.api === 'register' ? 'api/register' : 'api/users'
  const data = await axiosInstance.post(url, { ...{ locale: locale }, ...payload })
    .then(response => {
      if (payload.api === 'register') dispatch('loginAction', payload)
      Notify.create({
        color: 'positive',
        position: 'top',
        message: response.data,
        icon: 'check'
      })
    })
  return data
}

export async function logoutAction ({ commit }, user) {
  // axiosInstance.post('api/logout', payload)
  axiosInstance.post('api/logout', { ...{ locale: locale }, ...user })
    .then(repomse => {
      commit('logoutMutation')
    })
}

export async function updateAction ({ commit, dispatch }, payload) {
  axiosInstance.put('api/users/' + payload.id, payload)
    .then(response => {
      dispatch('authAction')
      Notify.create({
        color: 'positive',
        position: 'top',
        message: response.data,
        icon: 'check'
      })
    })
}

export async function deleteAction (context, user) {
  let token = context.getters['tokenGetter']
  if (token && confirm('Are You Sure You Want To Delete User ' + user.name) === true) {
    const { data } = await axiosInstance.delete(`/api/users/${user.id}`)
    return data
  } else return 'User ' + user.name + ' Not Deleted'
}

export async function authAction (context) {
  let token = context.getters['tokenGetter']
  if (token) {
    const { data } = await axiosInstance.get('api/user')
      .catch(error => {
        Notify.create({
          color: 'negative',
          position: 'top',
          message: 'authAction ' + error,
          icon: 'report_problem'
        })
      })
    context.commit('authMutation', { user: data })
    return data
  }
}

export async function usersAction (context) {
  let token = context.getters['tokenGetter']
  let auth = await context.dispatch('authAction')
  if (token) {
    try {
      const { data } = await axiosInstance.get(`api/users/${auth.id}`)
      context.commit('usersMutation', { users: data })
    } catch (error) {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'usersAction ' + error,
        icon: 'report_problem'
      })
    }
  }
}

export async function socialAuthAction (context, { provider }) {
  const { data } = await axiosInstance.post(`/api/login/${provider}`)
  return data.url
}
