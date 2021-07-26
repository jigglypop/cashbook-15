export class Instance {
    private instance: any = {}

    constructor() {

    }

    setInstance(key: string, value: any) {
        this.instance[key] = value
    }

    getInstance() {
        return this.instance
    }

    getInstanceByKey(key: string) {
        return this.instance[key]
    }
}

const instance = new Instance()
export default instance