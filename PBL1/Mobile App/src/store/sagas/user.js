import { Api } from '~/services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Creators as ErrorActions } from 'store/ducks/error';

function* login({ username, password }) {
  try {
    yield put({
      type: SET_LOGIN_LOADER,
      payload: true
    })
    let response = yield Api.post('/oauth/token', {
      username,
      password,
      ...Api.clientCredentials()
    })
    // console.log('[USER_LOGIN_TRIGGER RESPONSE]', response)
    yield AsyncStorage.setItem('credentials', JSON.stringify(response));
    yield put(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    }))
    yield call(getUserInfo)
    yield put({
      type: SET_LOGIN_LOADER,
      payload: false
    })
  } catch (err) {
    // console.log('[USER_LOGIN_TRIGGER ERROR]', err)
    if (err.error == "invalid_credentials") {
      Alert.alert("Erro", "Email ou password invalido");
    } else if (err.message == "Network request failed") {
      Alert.alert("Erro", "Verifique sua conexão com a internet e tente novamente");
    }
    yield put({
      type: SET_LOGIN_LOADER,
      payload: false
    })

  }
}
