/*
You'll commonly use a Hash Table because of its fast search, insertion, and delete operations:

*/

class HashTable {
    constructor() {
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key, value) {
        const index = this._hash(key)
        this.table[index] = [key, value]
        this.size++
    }

    get(key) {
        const target = this._hash(key)
        return this.table[target]
    }

    remove(key) {
        const index = this._hash(key)
        if (this.table[index] && this.table[index].length) {
            this.table[index] = []
            this.size--
            return true
        }
        return false
    }
}

const ht = new HashTable()
ht.set('Canada', 300)
ht.set('France', 100)
ht.set('Spain', 110)

console.log(ht.table)
console.log(ht.remove("France"))
console.log(ht.table)

