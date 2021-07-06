const toBase64 = (stringData: string) => {
    const encoded = Buffer.from(stringData).toString('base64')
    return encoded
}

const LocalStorageKeys = {
    UserCredentials: toBase64('USER_CREDENTIALS'),
    UserLastVote: toBase64('USER_LAST_VOTE'),
    UserRoom: toBase64('USER_ROOM'),
    UserLanguage: toBase64('USER_LANGUAGE')
}

export default LocalStorageKeys