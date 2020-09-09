$(document).ready(() => {
    $('.delete-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url: '/todo/delete/' + id,
            success: (response) => {
                alert('Note éffacée de la Base de données...');
                window.location.href = '/';
            },
            error: (error) => {
                console.log(error);
            }
        });
    });
});