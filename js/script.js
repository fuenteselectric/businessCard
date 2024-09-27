function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Ocultar todo el contenido de las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover la clase 'active' de todos los botones
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(tabName).style.display = "block";
    
    // Añadir la clase 'active' al botón que fue clicado
    evt.currentTarget.className += " active";
}
