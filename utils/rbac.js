export const permissions = [
    {
        role: 'user',
        actions: [
            'get_profile',
            'add_advert',
            'get_advert', 
            'update_advert'
        ]
    }, 


    {
        role: 'admin',
        actions: [
            'get_profile',
            'add_advert',
            'get_adverts',
            'get_advert',
            'update_advert',
            'delete_advert'
        ]
    }
]