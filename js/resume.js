$(() => {
    console.log("html document already load...")

    $("#about").on({
        click: () => {
            console.log("\"about\" link was pressed")
        }
    })
})