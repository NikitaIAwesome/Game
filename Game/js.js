       const enemies = [
            {
                name: "Шайлушай",
                mindamage: 5,
                maxdamage: 15,
                defense: 5,
                health: 60,
                maxHealth: 60,
                image: `
                                   ⡠⠔⠚⠉⠉⠉⠉⠑⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠒⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢂⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⣀⣀⣀⣤⣠⡄⣤⣄⡶⣤⣤⣤⡠⣄⣠⣀⣤⣤⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡴⠃⠀⠀⠀⠀⢀⣀⣤⣤⣴⣦⣿⣾⣿⣾⣯⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣾⣿⣿⣿⣿⣾⣽⣿⣿⣿⣿⣿⣿⣿⣶⢶⣦⣤⣤⣀⡀⠑⢄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⢀⡴⣲⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣽⣶⣄⠱⡀⠀
⠀⠀⠀⠀⠀⢀⡎⢀⡤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⡷⢹⠀
⠀⠀⠀⠀⠀⢺⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⢁⡇
⠀⠀⠀⠀⠀⠸⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠾⣁⠞⠀
⠀⠀⠀⠀⠀⠀⢣⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⢋⡩⠤⠖⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠢⢍⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⡿⢿⣿⣿⣿⣿⣿⡇⡴⠒⠊⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣻⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⠀⠀⠈⢿⣿⣿⡿⢏⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠐⣏⠒⢦⣀⣀⡀⠀⠳⡙⢷⣟⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠙⢿⣿⣿⢿⡄⠀⠀⠀⠈⠿⣠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢘⣿⠛⣾⣷⣬⢣⠀⠉⠢⣙⠻⣾⣽⣿⣿⢿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡳⣝⣤⣀⡘⣿⣾⣿⣿⣿⣶⣶⣦⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢻⣁⢻⣿⣿⣿⢸⡆⠀⠀⠀⠉⠒⠀⠒⠤⠴⢍⢻⣿⣯⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣶⣿⡼⣖⣻⣿⣿⣿⣿⣿⡳⢆⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡿⢠⣿⣿⣿⣎⡛⣆⢤⣤⠠⡆⠀⠀⠀⠀⠀⠑⢬⡛⢿⡾⣽⣻⣽⣷⣻⢿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣹⡼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡧⢹⣿⣿⣿⢱⣝⢿⣎⢻⡆⢷⠀⠀⠀⠀⠀⠀⠀⠈⣳⣿⣿⣽⣿⣾⣿⣟⡾⣽⢿⣟⣯⣿⢿⣟⣯⠿⣛⣁⡧⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⠾⠯⣷⣘⣿⣿⣿⡇⠯⠓⣝⣯⣽⣏⠢⢀⣀⣀⣠⢤⣿⣭⣽⣿⣻⣿⣿⣿⣿⣿⣟⡿⠤⠬⢍⣋⣙⣉⠤⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⠋⢀⢲⡼⣿⣾⣿⣿⡇⢸⠀⠀⠙⣿⣿⣿⣷⣶⣿⣿⣿⡟⣿⣿⣿⣷⣿⣿⣿⣿⣿⣍⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⢧⢶⣬⣿⣿⣿⣿⣿⣿⠆⣿⠀⠀⣰⣿⣿⣿⣿⣿⢿⣛⡧⣟⣿⣿⣿⣿⣿⣿⣿⣻⣿⡝⠄⠀⠉⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⢶⣯⣿⣿⣿⣿⣿⣿⣿⣧⡘⢄⠀⣻⣿⣿⣿⣿⣏⣶⣹⣾⣿⣞⡷⣯⡿⣟⢿⣯⣧⠙⠘⠀⠀⠀⠚⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣊⣦⣽⣿⡿⢏⡳⣮⣷⣿⣿⣿⣯⣿⣽⣟⣮⠷⣌⠛⣿⣆⡄⠀⠀⠰⡄⡱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠱⡝⣿⣿⣿⣿⣿⣿⣿⣿⣿⢳⡿⢋⣽⣚⣷⣿⢟⢻⣽⣿⣿⣿⣿⣿⣿⣾⡽⣦⣛⡤⢚⣿⣦⠀⠀⣹⣷⣌⡓⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠢⢛⣿⡿⠿⣿⡿⣿⢷⡾⣡⢯⣿⣿⡿⠋⠁⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣯⢞⡵⢊⢻⣧⡀⢿⢭⡻⣷⣦⡀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠉⠉⠁⠉⢀⡼⣡⣿⣿⡿⠏⠀⠀⠀⣸⣻⣿⣿⣿⣿⣿⣿⣿⡿⣝⣧⢏⡰⠀⠂⢹⣧⠘⡇⠙⣎⢿⣽⣦⠈⠐⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠤⢐⣈⣩⢷⣳⡟⣽⠁⠀⠀⣰⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣮⡳⣌⠳⣈⠤⢹⣇⢷⠀⠈⢹⠟⣯⠑⢢⠀⠀⠐⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠤⢒⣵⣶⢿⣽⣾⣿⣿⡱⡇⠀⠀⠀⣇⢠⡙⣿⣿⣿⣿⣿⣿⣿⡿⣿⣻⢷⡻⣜⣣⢓⠎⢦⢻⡞⠀⠀⡞⢸⡇⣀⣠⣀⠀⢤⡀⠈⠐⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣶⣿⣿⣯⣿⣾⣿⣿⣿⣳⠀⢠⠖⠚⡩⠟⠰⢦⠙⡛⣿⡽⣻⣷⢿⡿⣽⣏⠿⣜⠢⣍⠚⡤⠂⡇⠀⠀⡇⣿⡹⣿⠫⠿⣿⣶⣳⠀⡀⢳⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣸⢋⣹⣟⣿⣿⣿⣿⣿⠯⠋⠀⠀⢷⣾⡿⠁⠀⠀⠘⠳⠧⣄⠲⠉⠉⠯⣹⠷⣞⡿⣬⢳⡌⠓⢌⠡⡟⠀⠀⠹⣽⣷⣻⡄⠀⢹⡿⣿⣄⢻⣘⠆⠀⠀⠀⠀⠀⠀
⠀⠀⠛⢿⠟⣿⣿⡿⡯⠛⠁⠀⠀⠀⠀⠈⠙⡇⠀⠀⠀⠀⠀⠀⠈⠀⠰⢦⡐⠈⠇⠘⠅⢋⠣⠘⠀⠀⢀⣽⠀⠀⠀⠉⠛⠋⠀⠀⠀⡇⣿⣿⣿⠾⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠐⣧⡾⣻⠕⠋⠀⠀⠀⠀⠀⡠⠐⠒⠒⠛⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡼⣀⢠⡅⠀⠈⢓⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣿⣿⣜⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⡜⠁⠀⠉⠉⠉⠁⠐⣂⠠⠤⣄⡀⠀⠀⠀⠀⠈⠳⣌⡈⠑⠠⣠⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⣀⠀⣠⢦⣄⣆⢳⠲⣈⠷⣆⠌⠙⠂⣄⠀⠀⠀⠀⠁⡔⢌⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⣘⠶⣙⠾⣽⣯⡋⣷⣩⢶⣍⡛⢦⡐⠘⠳⡀⠀⠂⠀⢹⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⢀⡳⢄⠺⡍⣞⠲⡼⠀⠻⣏⠓⠯⣛⡄⠒⠨⠀⠀⠀⠀⠀⢨⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⠁⢠⠑⣌⡱⢊⠌⡓⠀⠀⠀⠈⢦⠀⠈⠙⢶⣀⣀⣀⣀⣀⣤⣿⡄⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣱⢦⣟⡾⡙⢦⢊⠥⣉⠀⠀⠀⠙⡆⠀⠀⠀⠀⠀⣀⣤⠟⠟⢁⡉⠁⢈⣉⣀⡤⠤⠄⣈⠐⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣼⣿⣿⣽⣷⣮⣮⣵⢧⠶⠀⠀⣸⠃⠀⠀⠀⢶⣊⠁⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠙⠢⢀⠑⢢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⢿⣿⣷⣿⣾⡽⢦⠶⠃⠀⠀⠀⠀⢸⡉⢀⠀⡀⢀⡁⢀⠀⠀⢂⠀⣤⡄⢂⠀⣀⡀⠠⡄⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡁⢢⠐⠰⢡⣈⠦⡜⢶⡉⣶⣖⣺⣽⣻⣿⣾⣵⣶⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⣰⢎⡗⣫⡜⣷⢻⣷⣽⣶⣿⣿⣿⠿⠿⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠾⢷⡾⠽⠿⠽⠛⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
            },
        {name: "мшк фреде",
        mindamage: 1,
        maxdamage: 1000,
        defense: 1,
        health: 666,
        maxHealth: 666,
        image:`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⣿⣿⣿⣿⣿⣇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⡀⠀⣠⣼⣿⣿⣿⠿⠿⢯⡿⠿⢤⡀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⡝⠀⠀⠀⠈⠸⠗⠽⣼⣿⣿⣿⣿⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣴⣷⣧⣤⡀⢰⣷⣻⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⢹⣿⣿⣿⣿⣿⡝⣴⣿⣿⣿⣯⣍⠀⠈⡌⡟⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⠣⣺⣗⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣟⣝⢻⡿⠟⣻⡟⠋⠉⢋⡟⣷⠎⣄⢁⠊⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⡇⠀⡀⣿⡧⠀⡴⡾⠰⠁⢙⣦⣭⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣾⣄⣿⣿⣾⣆⣤⣖⣠⣾⡗⣾⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠤⣠⣶⣝⣿⣿⣿⣿⡛⠑⢩⣿⡿⠓⠛⠉⣁⢎⣮⣰⣿⣏⢶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣾⣷⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⡓⣿⣿⣿⠀⠀⣀⣷⢿⣿⣿⣿⠩⢙⣯⣗⣎⣭⣲⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣯⣽⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⡶⢻⢿⣿⣿⣿⣿⣩⠀⠄⠰⠍⢢⠀⠀⠀⠀
⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣇⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⠁⠈⠙⢻⣋⣹⠐⠀⣿⣿⣿⣿⣷⣖⠁⡀⠀⠓⢣⠀⠀⠀
⠀⣠⠾⠙⠻⣿⣿⣿⣿⣿⣿⣿⡿⢻⣿⣿⣿⣿⣿⣿⡿⠿⠁⠀⠀⠀⠹⢁⠑⠀⡘⡿⣿⣿⣿⣯⢂⣄⡀⠘⣳⡆⠀⠀
⣼⣷⣏⣠⣌⣨⣿⣿⣿⣿⡟⠋⢠⣿⣿⣿⣿⣿⣿⣿⣷⣮⠁⠀⠀⠀⠀⢣⣈⠁⢃⡹⣿⣿⣿⣿⣖⠎⠁⠀⠁⡸⡀⠀
⣿⣿⡿⣿⣯⡿⢵⣿⣿⣿⡶⢆⣾⣿⣿⣿⣿⣿⣿⠛⠛⠋⠀⠀⠀⠀⠀⠀⣗⠑⠈⠁⡹⣿⠻⣿⣿⣷⣵⣦⣤⠊⠁⠀
⠹⣿⣯⣽⣿⣾⣷⡟⠙⠻⢯⠋⣿⣿⣿⣿⣿⣿⣾⣤⡀⠀⠀⠀⠀⠀⠀⠀⢸⠙⠨⢔⠅⣿⡀⠈⣻⣿⣿⡇⠑⠫⠑⡄
⠀⠈⠻⢿⣿⣿⡟⠻⢦⣤⠃⢸⣿⣿⣿⣿⣿⣿⣿⡋⠊⠀⠀⠀⠀⠀⠀⠀⠈⣞⣣⢴⢺⣿⡇⢠⣿⣿⣿⠂⠂⠀⠃⢡
⠀⠀⠀⢸⣿⡿⢿⣤⣤⡜⠀⠘⣿⣿⣿⣿⣿⣿⡿⡋⡷⡂⢀⠀⠀⠀⡀⠀⠀⣗⣿⣓⣾⣿⠇⢸⣿⣿⣿⣧⠠⠀⢲⣸
⠀⠀⠀⠈⠻⢿⣦⣖⡺⠁⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣵⠐⡈⠀⠀⠀⠀⠀⠀⣷⣝⣄⣿⣿⠀⢸⣿⣿⣷⠊⠀⠀⣢⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⡟⡻⢹⣿⠇⠀⠘⣿⣿⣷⣷⣥⣄⡿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣽⣿⣿⣿⣿⣫⡟⠊⠁⠀⠀⠀⠀⠀⠀⢀⢗⣽⣾⣯⡄⠀⢀⣾⠿⡟⢿⢟⣋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣷⣧⣤⣤⣄⣠⡤⣴⣿⣿⣿⣿⣿⣷⣿⣟⢁⢸⠁⠤⣣⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣤⢦⠜⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡅⠈⠀⠨⢪⢁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣷⡟⡠⡷⠁⢂⠧⢹⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⡻⢿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣇⣽⡇⣠⣾⢹⡎⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠥⠓⠊⠝⣻⣿⠀⠀⣿⣿⣿⣿⡿⡿⡿⠟⢑⣾⠀⠈⠛⠓⠚⠛⠚⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡊⢀⠀⠀⠐⣿⠀⠀⣿⣿⣿⡿⠉⢠⢁⡀⠼⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⡿⢒⡐⣄⣴⡿⠀⠀⢹⣿⣿⣿⢀⠀⠀⢀⣭⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡿⢾⠿⢿⡾⠁⠀⠀⠈⢿⣿⣿⣿⠷⠿⡾⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⣿⣿⣿⣇⣠⣴⡎⠀⠀⠀⠀⢸⣿⣿⣿⣾⡅⣌⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⢏⠉⠉⢹⢷⠀⠀⠀⠀⢸⣿⣿⣿⡏⠁⠀⠪⣱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡿⠿⠧⠀⠀⣺⠀⠀⠀⠀⢸⣿⣿⣿⢄⠀⠄⠌⡉⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡃⠀⡀⠀⢠⣿⠀⠀⠀⠀⢸⣿⣿⣿⡄⠗⠀⢀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣷⢞⡔⠀⠺⡇⠀⠀⠀⠀⢸⣿⣿⣿⣧⡂⢀⠴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⠇⠀⢠⣃⠇⠀⠀⠀⠀⠀⣿⣿⣿⡟⣏⢀⣹⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⣶⣿⣿⣿⣿⣗⠒⢿⣷⡄⠀⠀⠀⣠⣾⣿⣿⣷⠚⢳⣾⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣤⣶⣾⣥⡾⣿⠟⣫⣾⣿⣿⣄⣤⣿⣿⠀⠀⡼⣾⣿⣩⣿⣿⣷⣹⣿⡿⢮⣇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣷⣾⣯⣸⣿⣿⡿⢉⣀⢹⣿⣿⣧⣾⣿⣯⣽⣿⣿⣿⠇⠉⣿⣧⣦⣱⡵⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⢿⣿⣿⣿⣿⣿⣿⡺⢼⣿⣿⣗⡊⣘⣹⡛⢋⣿⣿⣟⠪⢻⣿⣿⣿⠂⠧⣽⣿⣧⠁⠀⣟⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠉⠉⠛⠓⠒⠒⠚⠁⠈⠛⠻⠧⠤⠛⠛⠿⠯⠿⠬⠞⠛⠻⠭⠝⠓⠂⠀⠀⠀⠀⠀`},
            {
                name: "ЖИЖА",
                mindamage: 20,
                maxdamage: 25,
                defense: 10,
                health: 55,
                maxHealth: 55,
                image: `⢶⡆⠀⠀⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣾⣿⣦⣤⣭⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣰⠏⠀⢹⣻⣭⣭⡧⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⠏⠀⠴⠚⣷⣿⣿⠀⠀⢀⡤⠖⠛⠹⠶⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡏⠀⠀⠀⡼⠉⠉⠁⢀⡴⠋⠀⠀⠤⢄⡀⠀⠀⠈⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡇⠀⠀⠀⢧⡀⠀⢠⠎⠀⢠⣤⡞⠒⠲⡌⠃⠀⠀⠀⠱⢤⡀⠀⢀⣀⣀⣀⠀⠀
⠀⣧⠀⠀⠀⠀⠙⠲⠏⠀⢀⡀⠙⣇⠀⠀⢘⡶⠆⣤⠤⠔⢲⣯⡖⠉⠀⠀⠈⢧⠀
⠀⢺⣦⡀⠀⠂⠀⠀⠀⠀⠀⢠⣄⠼⣗⠒⠋⠀⠀⠹⣄⣠⣿⡋⡀⢠⣤⡆⠀⢸⠀
⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠈⠦⣠⠴⣄⢀⣠⣄⣸⠇⠀⣳⣿⣧⠈⢹⠁
⠀⠀⠀⠘⠶⡆⠀⠆⢶⣴⠀⢾⠀⠀⠀⠀⠀⠀⠈⠉⡼⡭⣭⡴⠖⠼⠛⣿⣿⠏⠀
⠀⠀⠀⠀⠀⢻⠀⠀⠀⠁⠀⠘⡄⠀⣠⢤⣀⡤⡄⢸⣿⣿⠋⠀⠀⠀⠀⠙⠁⠀⠀
⠀⠀⠀⠀⠀⣏⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠘⠛⢱⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⠁⠀⠀⠸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠃⠀⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠹⡆⠀⠀⠀⣷⣄⢠⡀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠃⠀⡄⠀⠀⠺⠾⠃⠀⠀⠀⠀⠾⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣀⣀⡴⠋⠀⠛⠁⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⢀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠁⠀⠀⠀⠀⣤⡄⠀⠀⠀⡴⠛⠲⡄⠀⠀⠀⠀⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⣀⠀⠘⠀⠀⣠⠞⠁⠀⠀⢣⠀⠀⠀⠀⠠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠘⠒⠒⠶⠁⠉⠉⠉⠉⠁⠀⠀⠀⠀⡞⠀⠀⠰⠇⠐⠛⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣼⠁⠀⠀⠀⠀⠀⠀⠈⢳⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠷⠤⠤⠤⠤⠿⠉⠁⠀⠀⠀⠀⠀⠀⠀`
            },
            {
                name: "Синелия",
                mindamage: 30,
                maxdamage: 50,
                defense: 8,
                health: 25,
                maxHealth: 25,
                image: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠠⠤⠤⠤⠤⠤⠤⠀⣀⣀⣀⠀⠀⢀⡀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⡒⠉⠀⠀⠀⠒⠲⠤⡀⠀⠀⠀⠈⠙⠻⣷⠿⢄⡀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⡵⠋⠀⡆⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠑⢄⠙⢪⡓⣌⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢊⠎⠀⠀⢠⠋⠦⡀⠀⠀⠀⠀⠀⠀⠈⢣⡀⢢⠀⠀⠀⠈⢣⡀⢹⣌⢯⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢃⡎⢀⠀⢠⠇⠀⠀⠈⠒⣵⡲⣖⠖⠀⠀⠠⢣⠈⣇⠀⠀⠀⢰⣵⠀⠘⡆⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢸⠀⣞⣠⣃⠀⠀⠀⠀⠀⠋⣉⡙⠿⡦⣄⡀⠈⡇⢸⠀⠀⠀⠀⠟⣧⠀⢸⡄⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡄⢠⢿⠯⠜⠁⠀⠀⠀⠀⢸⡇⠀⠀⠀⡀⠈⠁⢺⠘⠀⠀⠀⠀⢰⢸⠀⢸⣇⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⠃⠃⢸⢯⠞⠙⠦⠀⠀⠀⠀⠈⢀⣶⢾⣿⣿⡿⣧⢾⠛⠀⠀⠀⠀⠘⢸⣠⣃⣿⡀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⢰⢻⠈⢠⣐⣤⣀⠀⠀⠀⠀⠸⠃⠘⡷⢽⠿⠁⢸⣸⡆⠀⠀⠀⣤⢸⢁⣠⠤⠬⠭⠭⠭⣭⣭⠭⢭⡭⠟⣩⠆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⢻⣠⣿⠻⣟⢿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⢧⠀⠀⢠⢿⡏⠙⢢⠀⠀⠀⠀⠀⡼⠨⢔⣯⠴⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⡀⠀⣇⠈⠙⠋⠉⢸⣇⠄⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠸⡀⠀⡌⢸⣁⣤⣊⡀⠤⠤⣖⣪⠖⠚⠉⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢤⣃⣇⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠄⠀⠀⠀⠀⠘⠀⠀⣇⣞⣄⣈⣽⠟⣆⣀⡤⠚⠁⠀⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠯⠭⠝⢻⣿⡄⢸⢧⠀⠀⠀⠀⠀⠒⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠞⠉⠀⣷⠀⡇⡇⠀⠀⠀⢿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⢹⣼⠒⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠈⡇⠀⢸⢰⣿⢸⢹⠀⠀⠀⠀⡘⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⡼⠈⠀⠀⢿⡷⢄⡀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠉⠀⠀⠀⡇⠀⢸⢸⣿⣏⡇⠀⠀⠀⠀⡇⢋⠇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣧⠇⠀⠀⠀⣾⡇⠀⡉⡖⢤⣀⣀⣤⣶⣛⣀⣠⣤⣤⣤⣤⣇⠀⢸⡞⣻⡞⠀⠀⠀⠀⠀⣷⢸⡸⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡘⠀⠀⠀⢰⠛⠃⣰⢁⣷⡿⣿⣉⣉⡭⠭⠭⠭⠽⠷⠯⠤⠤⡵⢸⣇⣷⠁⠀⠀⠀⠀⠀⢻⢸⡇⢣⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⠃⠀⠀⣠⠸⠀⢰⠃⡼⡸⡇⠘⣿⣿⠀⠀⠀⠀⠀⠀⠀⣀⣀⣡⣸⡿⠁⠀⠀⠀⠀⠀⢰⢸⢸⡇⢸⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⢀⣇⠇⢠⢃⠜⠹⣹⣁⣈⣉⣉⣉⣉⣉⣉⣉⣉⡁⠤⠤⠤⡼⠁⠀⠀⠀⠀⠀⠆⢸⢸⣾⢣⡎⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⣜⡜⢠⠟⠁⣀⡀⢀⡏⡜⢡⡏⢸⠀⡇⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⢰⠀⣸⣰⠷⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠀⢠⠹⢡⠇⠀⠀⠉⠪⣽⣧⡇⠸⡇⠸⠤⡧⠤⠃⠀⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠘⠀⣇⠋⠳⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⠔⡽⠀⠀⠀⠀⣎⢀⠏⠀⠀⠀⠀⢠⠃⡘⢀⠏⢹⠀⡄⠁⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⡇⠀⡏⠀⠀⠘⢷⡄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡰⠋⣼⠆⠀⠀⠀⢸⡎⡜⠀⠀⠀⠀⠀⡞⢠⠇⡜⠀⢸⠀⡇⢰⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⡇⠀⡇⠀⠀⠀⠈⢿⡀⠀⠀
⠀⠀⠀⠀⢠⠞⠀⡸⡜⠀⠀⠀⠀⠸⢰⠁⠀⠀⠀⠀⣰⠀⡞⢰⡧⢤⢾⠀⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⡇⠀⠀⠀⠀⠈⣿⠀⠀
⠀⠀⠀⡠⠁⠀⢰⢻⠃⠀⠀⠀⢀⣇⡏⠀⠀⠀⠀⢠⠇⢠⠁⡾⠀⠘⢹⠀⡇⠘⡇⠀⠀⠀⠀⠀⡇⡇⠀⠀⠀⠀⠀⡇⠀⠁⠀⠀⠀⠀⠀⢹⣇⠀
⠀⢀⡔⠁⠀⠀⡆⡌⠀⠀⠀⠀⢸⢸⠀⠀⠀⠀⠀⡜⠀⡞⢰⠷⠿⠿⠿⠀⢿⠀⡇⠀⠀⠀⠀⠀⡇⡇⠀⠀⠀⠀⠀⡇⠀⡀⠀⠀⠀⠀⠀⠀⣿⡄
⢀⠎⠀⠀⠀⢸⢡⡇⠀⠀⠀⠀⡆⡆⠀⠀⠀⠀⢠⠇⢠⠁⡞⠀⠀⠀⠀⠀⢸⠀⠁⠀⠀⠀⠀⢰⡇⠁⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⢹⣇`
            }
        ];

        const player = {
            name: "Игрок",
            mindamage: 5,
            maxdamage: 20,
            health: 100,
            maxHealth: 100,
            defense: 5,
            money: 0,
            inventory: ["Зелье здоровья🍹", "Камень🗿"],
            swordLevel: 1,
            armorLevel: 1,
            rings: 0
        };

        let currentEnemy = null;
        const art =[ `
⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⣀⣠⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⡶⠒⠒⠛⠛⠻⢿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠻⠀⠀⠀⢀⣶⣶⣤⡙⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⢸⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣼⣿⣿⡿⢃⣼⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⣿⣿⣿⣿⣷⣶⣿⣿⣿⡿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⡿⠛⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⡴⠚⠉⠓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⣿⠁⠀⠀⠀⢈⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠘⣇⠀⢙⠄⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠸⠿⣾⣿⣿⣄⡀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⢀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⠛⠉⠉⠉⠲⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⣀⣀⡀⠀⠀⣀⣀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠉⠛⠿⣿⣿⣿⣿⣶⣶⣶⣶⡶⠖⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠈⠹⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡟⠀⠸⣿⣿⣿⣿⣿⣿⡇⠀⣀⣤⣾⣿⣿⣿⣦⣄⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠹⢿⣿⣿⣿⣿⠁⠀⣿⣿⣿⣿⣿⣿⣿⣿⣧⣇⠀⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣷⣤⣤⣤⡀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡄⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
⠀⠀⣀⣀⣀⣀⣀⣼⣿⣿⣷⣤⣤⣤⣀⣀⠀⢀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀
⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀
⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠛⠛⠛⠛⠛⠛⠋⠁⠀`,`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢁⣤⠼⠟⠛⠛⠛⠛⠛⠿⣤⡘⠻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠋⢩⣭⣭⣥⣾⠁⠄⣠⣤⣤⣤⣤⣤⡀⠉⢳⣦⠉⣿⣿⣿⣿⣿
⣿⣿⣿⡟⢁⣴⠛⠉⠁⠄⠄⢸⢠⣾⡟⠉⠉⠉⠉⠙⣿⣦⡄⠘⣦⠘⢿⣿⣿⣿
⣿⡿⠏⣀⡾⠄⢀⣰⣶⠿⠟⠉⣹⡇⣀⣶⣶⣄⠄⠄⠄⠙⣷⡄⠙⢷⣀⠹⢿⣿
⣿⠃⢰⠋⠁⣤⣾⡟⠋⠄⢠⣶⡟⠓⠛⠉⠙⢻⡄⠄⣶⠄⢹⣷⠄⠈⠙⣆⠘⣿
⠿⢸⡏⠄⣸⠿⠁⠄⢀⣶⡿⠋⠄⠄⠄⠄⠄⠈⣿⡆⣿⠄⠈⢹⣀⠄⠄⢹⣇⡉
⠄⡏⠁⣴⡟⠄⣠⣴⡾⠋⠄⠄⠄⠄⠄⠄⠄⠄⠈⢷⣉⣧⠄⠘⣿⡄⠄⠄⢹⡇
⣤⡇⢸⡟⠄⣤⣿⢻⡟⠛⠛⢿⣧⡄⠄⠄⣼⣿⠛⠛⠛⣿⡇⠄⠈⣿⡀⠄⠘⣿
⣿⢰⣾⠄⢰⣿⢸⡏⢁⣶⣶⣶⡉⠁⠄⠄⢉⣱⣶⣶⣀⠄⢹⣇⠄⠸⢿⡀⠄⣿
⣿⢸⡇⢠⣿⠄⢸⡟⠛⠄⣿⣦⡇⠄⠄⠄⢸⠇⢿⣧⣿⠃⢸⣿⡀⠄⠘⡇⠄⣿
⣿⠈⠄⡏⢹⠄⢸⡇⠄⠄⠈⠉⠄⠄⠄⠄⠄⠄⠄⠉⠄⠄⢸⣿⣿⠄⠄⡇⠄⣿
⣿⠄⢀⡇⢸⠄⢸⣇⡀⠄⠄⠄⠄⢀⣀⣀⠄⠄⠄⠄⠄⠄⣸⣿⣿⠄⠄⡇⠄⣿
⣿⢠⣼⠄⢸⠄⠄⢸⣇⠄⠄⠄⠄⢀⣀⣀⠄⠄⠄⠄⠄⣀⣿⣿⠛⠄⢠⠇⢠⣿
⣿⣼⡏⠄⣼⠄⢀⡌⢹⣤⠄⠄⢲⣾⣿⣿⡶⠂⠄⠄⣠⣿⢿⡏⠄⢰⣿⠄⢸⣿
⣿⠃⢠⣼⡟⠄⢸⡇⠄⣿⣷⣄⠄⠘⠛⠛⠄⠄⣠⣾⣿⡿⢸⣇⠄⠈⢻⡄⠘⣿
⠛⣸⣿⠋⠄⠄⣼⠇⢰⣿⣿⣿⠻⢷⣤⣤⣾⡿⠋⢸⣿⠁⣼⣿⣷⠄⠄⡇⢀⣿
⠄⣿⡏⠄⠄⣶⢻⣴⣾⣿⣿⣿⠄⠈⠉⠉⠉⠁⠄⢸⠛⣤⣿⡟⠉⠄⣠⣧⣼⣿`,`.
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⠄⡀⢀⣀⣀⣀⡀
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣤⣤⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣿⣿⣿⣿⣿⣿⡿⠛⠿⠟⠻⢿⣿⣿⡿⠋
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠘⢷⡀
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⠇⢀⣤⣤⣀⡀⠄⠄⢹⡆⠄⠙⢶⣄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⢾⣿⣿⡇⠄⠄⣷⣜⣋⣙⣛⣶⣾⣟⣷⡦⣄⣸⡇
⠄⠄⠄⠄⠄⠄⠄⠄⢀⣼⣿⠟⠿⠿⠃⠄⠄⠉⠛⠛⠛⠋⣯⡄⢉⣛⣦⠞⠉
⠄⠄⠄⠄⠄⠄⢀⣴⡟⠹⣯⠄⠄⣠⡄⠄⠄⠄⠄⠄⠄⠄⠈⠁⠨⡿⣿
⠄⠄⠄⠄⣀⣰⠟⣦⣷⠄⠹⣆⠄⠛⠛⠛⠻⠶⣄⡀⠄⠄⠄⠄⠄⠄⠈⢧⡀
⠄⠄⢠⡞⠋⠻⣦⠸⣽⡆⠄⠉⢣⣄⡀⠄⠄⣀⣬⣽⣢⣤⣀⠄⠄⠄⠄⢸⡇
⠄⢰⠇⠄⠄⠄⠄⢷⢧⢳⡄⠄⢸⣿⣿⣶⣾⣿⡆⠄⠄⠄⠈⠙⠛⠶⠶⠞⠃
⠄⡞⠄⠄⠄⠄⠄⠘⣾⢸⡟⣤⣼⣿⣿⢻⣿⣿⣟
⢠⡇⠄⠄⠄⠄⠄⠄⢻⠘⣷⠈⠁⠈⣿⣼⠋⠉⠹⣆
⢸⡇⠄⠄⣀⣀⣀⣀⣿⠸⢿⣀⣀⣀⡿⣿⠄⠄⠄⠹⡇
⠈⢷⣟⡿⣯⡍⣉⠉⠛⢢⣤⠄⠄⠄⠄⣿⡴⠖⠒⣶⣽
⠄⢸⡿⣷⠏⣼⠋⣠⣤⠶⠾⠛⠉⠉⠉⠉⠳⢦⠄⠘⡇
⠄⡟⠹⣜⠦⠷⠴⠋⠄⠄⠄⣀⣤⡴⠚⠛⠉⠉⠁⢀⡇
⢀⡇⠄⠉⠓⠶⠶⠶⠒⠚⠉⠉⠙⠲⢦⣤⣤⣤⣴⠞⡇
⢸⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⢸⢀⢸⡀⢸⡀
⠘⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⡼⢸⠄⡇⢸⡇
⠄⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⣷⣼⠄⡇⢸⡇
⠄⢇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣾⢠⠇⢸⡇
⠄⢸⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⢻⠄⣸⡇
⠄⢸⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡞⠛⠃
⠄⠈⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣷
⠄⠄⢧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿
⠄⠄⢸⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸
⠄⠄⢸⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣴⠚
⠄⠄⠈⢹⣷⣶⣶⣶⣶⡖⠒⠒⢻⣿⣿⣿⣿⣿
⠄⠄⠄⢸⣿⣿⣿⣿⣿⡇⠄⠄⢸⣿⣿⣿⣿⣿
⠄⠄⠄⣿⣿⣿⣿⣿⣿⡇⠄⠄⢸⣿⣿⣿⣿⣿
⠄⠄⠄⣿⣿⣿⣿⣿⣿⡇⠄⠄⢸⣿⣿⣿⣿⣿
⠄⠄⢰⣿⣿⣿⣿⣿⣿⠃⠄⠄⢸⣿⣿⣿⣿⣿
⠄⠄⢸⣿⣿⣿⣿⣿⡿⠄⠄⠄⣼⣿⣿⣿⣿⡏
⠄⠄⣿⣿⣿⣿⣿⣿⠇⠄⠄⢀⣿⣿⣿⣿⣿⣧⣤⣀⣀⡀
⠄⢸⣿⣿⣿⣿⣿⣿⣀⡀⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀
⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⣿⣿⣿⠿⠇
⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
⠄⠄⠄⠉⠉⠉⠉⠉⠛⠛⠛⠛⠉⠉`];

        function initGame() {
            updatePlayerStats();
        }

        function getRandomDamage(min,max) {
            return Math.floor(Math.random()*(max - min + 1))+ min;
        }
        function HACKER() {
            player.money = player.money + 100000
            updatePlayerStats();
        }
        function enterForest() {
            document.getElementById('MenuBtn').classList.remove('hidden');
            document.getElementById('MenuBtn2').classList.add('hidden');
        }
        function enterTown() {
            document.getElementById('MenuBtn').classList.add('hidden');
            document.getElementById('MenuBtn2').classList.remove('hidden');
        }

        function updatePlayerStats() {
            document.getElementById('Hphero').innerText = `${player.health}/${player.maxHealth}💕`;
            document.getElementById('moneyhero').innerText = `${player.money}💲`;
        }

        const ironsmith = () => {
            hidemapbtn()
            hideAdventureButtons();
            hideInventory();
            document.getElementsByClassName('text')[0].textContent = art[0];
            document.getElementsByClassName('textIronSmith')[0].textContent = 'Чего хотел?';
            document.getElementById('ironsmithButtons').classList.remove('hidden');
        }

        const goOnAdventure = () => {
            hidemapbtn()
            hideIronsmithButtons();
            hideInventory();
            document.getElementsByClassName('text')[0].textContent = "";
            document.getElementsByClassName('textIronSmith')[0].textContent = 'Я ОТПРАВЛЯЮСЬ В ПОХОД!!!';
            document.getElementById('AdventureButtons').classList.remove('hidden');
        }

        const openInventory = () => {
            document.getElementById('Barbtn').classList.add('hidden');
            document.getElementById('ShopBtn').classList.add('hidden');
            hidemapbtn()
            hideIronsmithButtons();
            hideAdventureButtons();
            document.getElementsByClassName('text')[0].textContent = "";
            document.getElementsByClassName('textIronSmith')[0].textContent = 'Мой инвентарь';
            
            const inventoryList = document.getElementById('inventory-items');
            inventoryList.innerHTML = '';
            
            player.inventory.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                if (item === "Зелье здоровья🍹") {
                    const useBtn = document.createElement('button');
                    useBtn.textContent = "Выпить";
                    useBtn.onclick = () => useHealthPotion();
                    li.appendChild(useBtn);
                }
                inventoryList.appendChild(li);
            });
            
            document.getElementById('inventory').classList.remove('hidden');
        }

        function useHealthPotion() {
            const index = player.inventory.indexOf("Зелье здоровья🍹");
            if (index !== -1) {
                player.health = Math.min(player.health + 30, player.maxHealth);
                player.inventory.splice(index, 1);
                updatePlayerStats();
                openInventory();
                alert("Вы восстановили 30 здоровья!");
            }
        }

        const openMap = () => {
            document.getElementById('Barbtn').classList.add('hidden');
            hideIronsmithButtons();
            hideAdventureButtons();
            hideInventory();
            document.getElementById('ShopBtn').classList.add('hidden');
            document.getElementsByClassName('text')[0].textContent = "";
            document.getElementsByClassName('textIronSmith')[0].textContent = 'Карта местности';
            document.getElementById('MapButtons').classList.remove('hidden');

            
        }

        const improveSword = () => {
            if (player.money >= 10*player.swordLevel) {
                player.money -= 10*player.swordLevel;
                player.mindamage += 1;
                player.maxdamage += 3;
                player.swordLevel++;
                updatePlayerStats();
                alert(`Вы улучшили меч! Урон: ${player.mindamage}-${player.maxdamage} (Уровень ${player.swordLevel})`);
            } else {
                alert(`Эй, тебе нужно ${player.swordLevel*10} монет`);
            }
        }

        const improveArmor = () => {
            if (player.money >= 10*player.armorLevel) {
                player.money -= 10*player.armorLevel;
                player.defense += 3;
                player.maxHealth += 10;
                player.health += 10;
                player.armorLevel++;
                updatePlayerStats();
                alert(`Вы улучшили броню! Защита: ${player.defense}, Здоровье: ${player.maxHealth} (Уровень ${player.armorLevel})`);
            } else {
                alert(`Эй, тебе нужно ${player.armorLevel*10} монет`);
            }
        }

        const chat = () => {
            const phrases = [
                "Будь осторожен в своих приключениях!",
                "Мои улучшения - лучшие в городе!",
                "Видел того Шайлушая? Ужасное создание...",
                "Приходи, когда накопишь больше монет"
            ];
            alert(phrases[Math.floor(Math.random() * phrases.length)]);
        }

        const chatshop = () => {
            const phrases = [
                "Ты уже заходил в бар? Там можно заработать :3",
                "Не ходи на мост, там страшный орк",
                "Мои кольца волшебные, ты можешь их одеть сколько захочешь хи-хи",
                "Приветсвую! Как дела)"
            ];
            alert(phrases[Math.floor(Math.random() * phrases.length)]);
        }
        const left = () => AdventureGo();
        const right = () => AdventureGo();
        const up = () => AdventureGo();

        function AdventureGo() {
            const adventurechance = Math.floor(Math.random() * 100) + 1;
            document.getElementById('number').innerText = adventurechance;
            
            if (adventurechance < 30) {
                startFight();
            } else if (adventurechance < 60) {
                const foundMoney = Math.floor(Math.random() * 15) + 5;
                player.money += foundMoney;
                updatePlayerStats();
                alert(`Вы нашли ${foundMoney} монет!💰💰💰`);
            } else if (adventurechance < 80) {
                const items = ["Зелье здоровья🍹", "Камень🗿", "Старый меч🔪", "Кусок брони", "Листок с шуткой(АХАХХААХХААХХААХХ.)", "Листовку о пропаже ребенка(Вам его очень жаль)"];
                const foundItem = items[Math.floor(Math.random() * items.length)];
                player.inventory.push(foundItem);
                alert(`Вы нашли ${foundItem}!`);
            } else {
                alert("Вы ничего не нашли...");
            }
        }
        function SHOP(){
            document.getElementById('Barbtn').classList.add('hidden');
            hideInventory();
            document.getElementById('ShopBtn').classList.remove('hidden');
            document.getElementById('MapButtons').classList.add('hidden');
            document.getElementsByClassName('text')[0].textContent = art[1];

        }

        function BAR(){
            hideInventory();
            document.getElementById('Barbtn').classList.remove('hidden');
            document.getElementById('ShopBtn').classList.add('hidden');
            document.getElementById('MapButtons').classList.add('hidden');
            document.getElementsByClassName('text')[0].textContent = art[2];

        }
        function BAR(){
            hideInventory();
            document.getElementById('Barbtn').classList.remove('hidden');
            document.getElementById('ShopBtn').classList.add('hidden');
            document.getElementById('MapButtons').classList.add('hidden');
            document.getElementsByClassName('text')[0].textContent = art[2];

        }
        function game100(){
            if (player.money >=100){
                if (Math.random() < 0.5) {
                alert("Поздравляю ты выиграл 100 монет");
                player.money += 100;
                updatePlayerStats();
            } else {
                alert("АХХАХАХАХА ТЫ ПРОИГРАЛ 100 монет");
                player.money -= 100;
                updatePlayerStats();
            }
            }
        }
        const buyelexir = () => {
            const items = ["Зелье здоровья🍹", "Камень🗿", "Старый меч🔪", "Кусок брони", "Листок с шуткой(АХАХХААХХААХХААХХ.)", "Листовку о пропаже ребенка(Вам его очень жаль)"];
            if (player.money >= 100) {
                player.money -= 100;
                player.inventory.push(items[0])
                updatePlayerStats();
                alert(`Вы купили зелье`);
            } else {
                alert(`Эй, тебе нужно 100 монет`);
            }
        }
        const buyring = () => {
            const items = ["Кольцо💍"];
            if (player.money >= 150) {
                player.money -= 150;
                player.inventory.push(items[0])
                player.rings += 1;
                player.defense += 5;
                updatePlayerStats();
                alert(`Вы купили кольцо`);
            } else {
                alert(`Эй, тебе нужно 150 монет`);
            }
        }

        function startFight() {
            currentEnemy = getRandomEnemy();
            document.getElementById('AdventureButtons').classList.add('hidden');
            document.getElementsByClassName('text')[0].innerHTML = `<div class="enemy-image">${currentEnemy.image}</div>`;
            
            const enemyInfo = document.getElementById('enemy-info');
            enemyInfo.innerHTML = `
                <h3>${currentEnemy.name}</h3>
                <p>Здоровье: ${currentEnemy.health}/${currentEnemy.maxHealth}💕</p>
                <p>Урон: ${currentEnemy.mindamage}-${currentEnemy.maxdamage}</p>
                <p>Защита: ${currentEnemy.defense}</p>
            `;
            
            document.getElementById('fight').classList.remove('hidden');
        }

        function getRandomEnemy() {
            const enemy = {...enemies[Math.floor(Math.random() * enemies.length)]};
            enemy.health = enemy.maxHealth;
            return enemy;
        }

        function attack() {
            const playerDamage = Math.max(1,getRandomDamage(player.mindamage,player.maxdamage)-currentEnemy.defense);
            currentEnemy.health -= playerDamage;
            
            let enemyDamage = 0;
            if (currentEnemy.health > 0) {
                enemyDamage = Math.max(1, getRandomDamage(currentEnemy.mindamage,currentEnemy.maxdamage)-player.defense);
                player.health -= enemyDamage;
            }
            
            updateFightInfo(playerDamage, enemyDamage);
            checkBattleResult();
        }

        function tryEscape() {
            if (Math.random() < 0.2) {
                alert("Вы успешно сбежали!");
                endFight();
            } else {
                alert("Побег не удался! Враг атакует!");
                const enemyDamage = Math.max(1,getRandomDamage(currentEnemy.mindamage,currentEnemy.maxdamage)-player.defense);
                player.health -= enemyDamage;
                updateFightInfo(0, enemyDamage);
                checkBattleResult();
            }
        }

        function updateFightInfo(playerDamage, enemyDamage) {
            const enemyInfo = document.getElementById('enemy-info');
            enemyInfo.innerHTML = `
                <h3>${currentEnemy.name}</h3>
                <p>Здоровье: ${Math.max(0, currentEnemy.health)}/${currentEnemy.maxHealth}💕</p>
                <p>Урон: ${currentEnemy.mindamage}-${currentEnemy.maxdamage}</p>
                <p>Защита: ${currentEnemy.defense}</p>
                <p>Вы нанесли ${playerDamage} урона!</p>
                ${enemyDamage > 0 ? `<p>${currentEnemy.name} нанес вам ${enemyDamage} урона!</p>` : ''}
            `;
            
            updatePlayerStats();
        }

        function checkBattleResult() {
            if (currentEnemy.health <= 0) {
                const reward = Math.floor(currentEnemy.maxHealth / 2) + 5;
                player.money += reward;
                updatePlayerStats();
                alert(`Вы победили ${currentEnemy.name} и получили ${reward} монет!`);
                endFight();
            } else if (player.health <= 0) {
                alert("Вы почти умерли...Вас спас мимо проходящий человек");
                player.health = Math.floor(player.maxHealth / 2);
                player.money = Math.floor(player.money / 2)
                alert("Кажется ваши карманы немного опустели...     ");
                updatePlayerStats();
                endFight();
            }
        }

        function endFight() {
            document.getElementById('fight').classList.add('hidden');
            document.getElementsByClassName('text')[0].textContent = "";
            document.getElementById('AdventureButtons').classList.remove('hidden');
        }

        function hideIronsmithButtons() {
            document.getElementById('ironsmithButtons').classList.add('hidden');
        }
        
        function hideAdventureButtons() {
            document.getElementById('AdventureButtons').classList.add('hidden');
        }
        function hidemapbtn() {
            document.getElementById('MapButtons').classList.add('hidden');
        }
        
        function hideInventory() {
            document.getElementById('inventory').classList.add('hidden');
        }

        initGame();
