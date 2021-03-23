import bycrpt from "bcryptjs"

const passwordCompareSync = (passwordToTest,passwordHash) => bycrpt.compareSync(passwordToTest,passwordHash)

export default passwordCompareSync;