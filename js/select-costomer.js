const defaultSelect = () => {
    const element = document.querySelector('.select__default');
    const choices = new Choices(element, {
        itemSelectText: "",
        noResultsText: "Ничего не найдено",
    });
};

defaultSelect();

