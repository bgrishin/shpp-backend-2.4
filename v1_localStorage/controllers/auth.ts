import { loginOption, register } from "../services/auth";

export function loginAcc(req: any, res: any) {
    const { login, pass } = req.body
    if (!(login && pass)) return res.status(404).json({ok: false })
    const Id: string | undefined = loginOption(login, pass)
    if(!Id) return res.status(404).json({ "error": "not found" })
    req.session.Id = Id
    res.status(200).json({ ok: true })
}

export function registerAcc(req: any, res: any) {
    const { login, pass } = req.body
    if (!(login && pass)) return res.status(500).send('Internal Server Error')
    const Id: string | undefined = register(login, pass)
    if(!Id) return res.status(400).json({ "error": "already exist" })
    req.session.Id = Id
    res.status(200).json({ ok: true })
}

export function logout(req: any, res: any) {
    req.session.destroy((err: any) => {
        if(!err) res.clearCookie('connect.sid').json({ok: true})
    })
}