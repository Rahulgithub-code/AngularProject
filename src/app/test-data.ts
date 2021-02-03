import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb(){
        let userDetails=[{
            id: 1,
            name: 'Rahul',
            email: 'rk@gmail.com',
            address: 'Ranchi'
        },
        {
            id: 2,
            name: 'Vipul',
            email: 'vk@gmail.com',
            address: 'Lohardaga'
        },
        {
            id: 3,
            name: 'Nitu',
            email: 'nk@gmail.com',
            address: 'JSR'
        }]
        return {user: userDetails};
    }
    

}