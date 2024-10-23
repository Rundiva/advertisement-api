export const permissions = [
    {
        role: 'user',
        actions: [
            'get_profile',
            'add_advert',
            'get_advert', 
            'update_advert',
            'update_profile',
            'post_category',
            'update_category'
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
            'delete_advert',
            'update_profile',
            'post_category',
            'get_category',
            'get_categories',
            'update_category',
            'delete_category'
        ]
    }
]