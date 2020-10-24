$(() => {
    console.log("html document already load...")

    $("#about").on({
        click: () => {
            console.log("\"about\" link was pressed")
        }
    })

    $(".animated-hamburger-icon").on("click", function() {
        $(".animated-hamburger-icon").toggleClass("open")
    })
})