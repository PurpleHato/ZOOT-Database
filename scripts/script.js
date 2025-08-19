const instrumentData = [
    // Set 0x3 Hyrule Field
    {setId: '0x03', location: 'Hyrule Field', slot: '0x0', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x1', instrument: 'Oboe', category: 'Wind', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x2', instrument: 'Clarinet', category: 'Wind', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x3', instrument: 'Bassoon', category: 'Wind', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x4', instrument: 'Horn', category: 'Brass', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x5', instrument: 'Trumpet', category: 'Brass', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x6', instrument: 'Trumpet', category: 'Brass', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x7', instrument: 'Tuba', category: 'Brass', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x8', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0xC', instrument: 'Pizzicato strings', category: 'Strings', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0xD', instrument: 'Piano', category: 'Keyboard', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0xE', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x03', location: 'Hyrule Field', slot: '0xF', instrument: 'Xylophone', category: 'Percussion', notes: ''},

    // Set 0x4 Deku Tree
    {setId: '0x04', location: 'Deku Tree', slot: '0x1', instrument: 'Pad', category: 'Synth', notes: ''},
    {setId: '0x04', location: 'Deku Tree', slot: '0x0', instrument: 'Pad', category: 'Synth', notes: ''},

    // Set 0x5 Market
    {setId: '0x05', location: 'Market', slot: '0x0', instrument: 'Koto', category: 'Strings', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x1', instrument: 'Ocarina', category: 'Wind', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x2', instrument: 'Bassoon', category: 'Wind', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x3', instrument: 'Oboe', category: 'Wind', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0xA', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0xB', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x05', location: 'Market', slot: '0xC', instrument: 'Pizzicato Strings', category: 'Strings', notes: ''},

    // Set 0x6 Title Screen
    {setId: '0x06', location: 'Title Screen', slot: '0x0', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x1', instrument: 'Ocarina', category: 'Wind', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0xC', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0xD', instrument: 'Piano', category: 'Keyboard', notes: ''},
    {setId: '0x06', location: 'Title Screen', slot: '0xE', instrument: 'Piano', category: 'Keyboard', notes: ''},

    // Set 0x7 Jabu Jabu's Belly
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x0', instrument: 'Wind', category: 'Synth', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x1', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x2', instrument: 'Synth Strings', category: 'Synth', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x3', instrument: 'Creeking', category: 'Synth', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x4', instrument: 'Creeking', category: 'Synth', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x07', location: 'Jabu Jabu\'s Belly', slot: '0x9', instrument: '', category: 'Empty', notes: ''},

    // Set 0x8 Kakariko Village (guitar)
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x0', instrument: 'Harmonica', category: 'Wind', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x1', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x2', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x3', instrument: 'Ocarina', category: 'Wind', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x4', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x5', instrument: 'Accordion', category: 'Wind', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x6', instrument: 'Accordion', category: 'Wind', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x08', location: 'Kakariko Village (guitar)', slot: '0x9', instrument: '', category: 'Empty', notes: ''},

    // Set 0x9 Fairy Fountain
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x0', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x1', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x2', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x3', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x4', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x5', instrument: 'Ocarina', category: 'Wind', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x6', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x7', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x8', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x09', location: 'Fairy Fountain', slot: '0xC', instrument: 'Pizzicato Strings', category: 'Strings', notes: ''},

    // Set 0xA Fire Temple
    {setId: '0x0A', location: 'Fire Temple', slot: '0x0', instrument: 'Islamic chant 1', category: 'Voice', notes: '(U) 1.0 only?'},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x1', instrument: 'Islamic chant 2', category: 'Voice', notes: '(U) 1.0 only?'},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x2', instrument: 'Islamic chant 2', category: 'Voice', notes: '(U) 1.0 only?'},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x3', instrument: 'Xylophone', category: 'Percussion', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x5', instrument: 'Wind', category: 'Synth', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x6', instrument: 'Cymbal', category: 'Percussion', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0A', location: 'Fire Temple', slot: '0xA', instrument: 'Choir', category: 'Voice', notes: 'Other versions only?'},
    {setId: '0x0A', location: 'Fire Temple', slot: '0xB', instrument: 'Choir', category: 'Voice', notes: 'Other versions only?'},
    {setId: '0x0A', location: 'Fire Temple', slot: '0xC', instrument: 'Choir', category: 'Voice', notes: 'Other versions only?'},
    {setId: '0x0A', location: 'Fire Temple', slot: '0xD', instrument: 'Choir', category: 'Voice', notes: 'Other versions only?'},

    // Set 0xB Dodongo's Cavern
    {setId: '0x0B', location: 'Dodongo\'s Cavern', slot: '0x0', instrument: 'Wind', category: 'Synth', notes: ''},
    {setId: '0x0B', location: 'Dodongo\'s Cavern', slot: '0x1', instrument: 'Sounds 1', category: 'Synth', notes: ''},
    {setId: '0x0B', location: 'Dodongo\'s Cavern', slot: '0x2', instrument: 'Sounds 2', category: 'Synth', notes: ''},
    {setId: '0x0B', location: 'Dodongo\'s Cavern', slot: '0x3', instrument: 'Sounds 3', category: 'Synth', notes: ''},

    // Set 0xC Forest Temple
    {setId: '0x0C', location: 'Forest Temple', slot: '0x0', instrument: 'Pad', category: 'Synth', notes: ''},
    {setId: '0x0C', location: 'Forest Temple', slot: '0x1', instrument: 'Voice thing', category: 'Voice', notes: ''},
    {setId: '0x0C', location: 'Forest Temple', slot: '0x2', instrument: 'Wood chime', category: 'Percussion', notes: ''},

    // Set 0xD Lon Lon Ranch
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x0', instrument: 'Malon Voice', category: 'Voice', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x1', instrument: 'Malon Voice', category: 'Voice', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x2', instrument: 'Electric guitar', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x3', instrument: 'Electric guitar (high)', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x4', instrument: 'Electric guitar (high)', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0xA', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0xC', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0xD', instrument: 'Violin', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0xE', instrument: 'Violin', category: 'Strings', notes: ''},
    {setId: '0x0D', location: 'Lon Lon Ranch', slot: '0xF', instrument: 'Bell', category: 'Percussion', notes: ''},

    // Set 0xE Goron City
    {setId: '0x0E', location: 'Goron City', slot: '0x0', instrument: 'Drum', category: 'Percussion', notes: ''},
    {setId: '0x0E', location: 'Goron City', slot: '0x1', instrument: 'Clap', category: 'Percussion', notes: ''},
    {setId: '0x0E', location: 'Goron City', slot: '0x2', instrument: 'lolwut', category: 'Synth', notes: ''},
    {setId: '0x0E', location: 'Goron City', slot: '0x3', instrument: 'xylophone', category: 'Percussion', notes: ''},
    {setId: '0x0E', location: 'Goron City', slot: '0x4', instrument: 'Xylophone', category: 'Percussion', notes: ''},

    // Set 0xF Kokiri Forest
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x0', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x1', instrument: 'Oboe', category: 'Wind', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x2', instrument: 'Clarinet', category: 'Wind', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x3', instrument: 'Bassoon', category: 'Wind', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x4', instrument: 'Horn', category: 'Brass', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x8', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0xC', instrument: 'Pizzicato Strings', category: 'Strings', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0xD', instrument: 'Harpsichord', category: 'Keyboard', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0xE', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x0F', location: 'Kokiri Forest', slot: '0xF', instrument: 'Xylophone', category: 'Percussion', notes: ''},

    // Set 0x10 Spirit Temple
    {setId: '0x10', location: 'Spirit Temple', slot: '0x0', instrument: 'Voice pad', category: 'Voice', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x1', instrument: 'Synth', category: 'Synth', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x2', instrument: 'Egyptian flute', category: 'Wind', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x3', instrument: 'Clap', category: 'Percussion', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x4', instrument: 'Synth', category: 'Synth', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x5', instrument: 'Egyptian flute', category: 'Wind', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x10', location: 'Spirit Temple', slot: '0x9', instrument: '', category: 'Empty', notes: ''},

    // Set 0x11 Horse Race
    {setId: '0x11', location: 'Horse Race', slot: '0x0', instrument: 'Banjo', category: 'Strings', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x1', instrument: 'Banjo', category: 'Strings', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x5', instrument: 'Bass guitar', category: 'Strings', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x6', instrument: 'Harmonica', category: 'Wind', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x7', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0xA', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0xB', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0xC', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0xD', instrument: 'Violin', category: 'Strings', notes: ''},
    {setId: '0x11', location: 'Horse Race', slot: '0xE', instrument: 'Violin', category: 'Strings', notes: ''},

    // Set 0x12 Warp Songs
    {setId: '0x12', location: 'Warp Songs', slot: '0x0', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x1', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x2', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x3', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x4', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x5', instrument: 'Ocarina', category: 'Wind', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x8', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x12', location: 'Warp Songs', slot: '0xC', instrument: 'Pizzicato Strings', category: 'Strings', notes: ''},

    // Set 0x13 Goddess Cutscene
    {setId: '0x13', location: 'Goddess Cutscene', slot: '0x0', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x13', location: 'Goddess Cutscene', slot: '0x1', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x13', location: 'Goddess Cutscene', slot: '0x2', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x13', location: 'Goddess Cutscene', slot: '0x3', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},

    // Set 0x14 Shooting Gallery
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x0', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x1', instrument: 'Clarinet', category: 'Wind', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x2', instrument: 'Clarinet', category: 'Wind', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x3', instrument: 'Accordion', category: 'Wind', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x4', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x14', location: 'Shooting Gallery', slot: '0x9', instrument: '', category: 'Empty', notes: ''},

    // Set 0x15 Zora's Domain
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x0', instrument: 'Steel drum', category: 'Percussion', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x1', instrument: 'Voice pad', category: 'Voice', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x2', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x15', location: 'Zora\'s Domain', slot: '0x9', instrument: '', category: 'Empty', notes: ''},

    // Set 0x16 Shop
    {setId: '0x16', location: 'Shop', slot: '0x0', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x1', instrument: 'Accordion', category: 'Wind', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x2', instrument: 'Bass guitar', category: 'Strings', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x3', instrument: 'Trumpet', category: 'Brass', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x4', instrument: 'Trumpet (high)', category: 'Brass', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x16', location: 'Shop', slot: '0xA', instrument: 'Drum', category: 'Percussion', notes: ''},

    // Set 0x17 Ice Cavern
    {setId: '0x17', location: 'Ice Cavern', slot: '0x0', instrument: 'Bell pad', category: 'Synth', notes: ''},
    {setId: '0x17', location: 'Ice Cavern', slot: '0x1', instrument: 'Bell pad', category: 'Synth', notes: ''},
    {setId: '0x17', location: 'Ice Cavern', slot: '0x2', instrument: 'Wind', category: 'Synth', notes: ''},
    {setId: '0x17', location: 'Ice Cavern', slot: '0x3', instrument: 'Bell pad', category: 'Synth', notes: ''},

    // Set 0x18 Shadow Temple
    {setId: '0x18', location: 'Shadow Temple', slot: '0x0', instrument: 'Drum', category: 'Percussion', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x1', instrument: 'Wind', category: 'Synth', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x2', instrument: 'Sounds 1', category: 'Synth', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x3', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x4', instrument: 'Choir (high)', category: 'Voice', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x6', instrument: 'Islamic chant', category: 'Voice', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x7', instrument: 'Sounds 2', category: 'Synth', notes: ''},
    {setId: '0x18', location: 'Shadow Temple', slot: '0x8', instrument: 'Harpsichord', category: 'Keyboard', notes: ''},

    // Set 0x19 Water Temple
    {setId: '0x19', location: 'Water Temple', slot: '0x0', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x1', instrument: 'Wind chime', category: 'Percussion', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x4', instrument: 'Bell pad', category: 'Synth', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x5', instrument: 'Wood chime', category: 'Percussion', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x6', instrument: 'Voice pad', category: 'Voice', notes: ''},
    {setId: '0x19', location: 'Water Temple', slot: '0x7', instrument: 'Koto', category: 'Strings', notes: ''},

    // Set 0x1A Unused
    {setId: '0x1A', location: 'Unused', slot: '0x0', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x1', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0xA', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0xB', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0xC', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0xD', instrument: 'Piano', category: 'Keyboard', notes: ''},
    {setId: '0x1A', location: 'Unused', slot: '0xE', instrument: 'Piano', category: 'Keyboard', notes: ''},

    // Set 0x1B Gerudo Valley
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x0', instrument: 'Trumpet', category: 'Brass', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x1', instrument: 'Trumpet (low)', category: 'Brass', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x2', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x3', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x5', instrument: 'Bass guitar', category: 'Strings', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x7', instrument: 'Guitar', category: 'Strings', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0xA', instrument: 'Clap', category: 'Percussion', notes: ''},
    {setId: '0x1B', location: 'Gerudo Valley', slot: '0xB', instrument: 'Clap', category: 'Percussion', notes: ''},

    // Set 0x1C Lakeside Laboratory
    {setId: '0x1C', location: 'Lakeside Laboratory', slot: '0x0', instrument: 'Koto', category: 'Strings', notes: ''},
    {setId: '0x1C', location: 'Lakeside Laboratory', slot: '0x1', instrument: 'Drum', category: 'Percussion', notes: ''},
    {setId: '0x1C', location: 'Lakeside Laboratory', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1C', location: 'Lakeside Laboratory', slot: '0x3', instrument: 'Drum 2', category: 'Percussion', notes: ''},
    {setId: '0x1C', location: 'Lakeside Laboratory', slot: '0x4', instrument: 'Wind chime', category: 'Percussion', notes: ''},

    // Set 0x1D Kotake and Koume
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x0', instrument: 'Koto', category: 'Strings', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x1', instrument: 'Drum', category: 'Percussion', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x5', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x7', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x1D', location: 'Kotake and Koume', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},

    // Set 0x1E Ganon's Castle (Organ)
    {setId: '0x1E', location: 'Ganon\'s Castle (Organ)', slot: '0x0', instrument: 'Organ', category: 'Keyboard', notes: ''},
    {setId: '0x1E', location: 'Ganon\'s Castle (Organ)', slot: '0x1', instrument: 'Organ', category: 'Keyboard', notes: ''},
    {setId: '0x1E', location: 'Ganon\'s Castle (Organ)', slot: '0x2', instrument: 'Organ', category: 'Keyboard', notes: ''},
    {setId: '0x1E', location: 'Ganon\'s Castle (Organ)', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1E', location: 'Ganon\'s Castle (Organ)', slot: '0x4', instrument: 'Horn', category: 'Brass', notes: ''},

    // Set 0x1F Inside Ganon's Castle
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x0', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x1', instrument: 'Wind', category: 'Synth', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x2', instrument: 'Sounds 1', category: 'Synth', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x3', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x4', instrument: 'Piano', category: 'Keyboard', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x5', instrument: 'Piano', category: 'Keyboard', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x1F', location: 'Inside Ganon\'s Castle', slot: '0x7', instrument: 'Sounds 2', category: 'Synth', notes: ''},

    // Set 0x20 Ganondorf Battle
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x0', instrument: 'Flute', category: 'Wind', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x1', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x2', instrument: 'Choir (low)', category: 'Voice', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x4', instrument: 'Horn', category: 'Brass', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x5', instrument: 'Trumpet', category: 'Brass', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x6', instrument: 'Trumpet (low)', category: 'Brass', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x7', instrument: 'Tuba', category: 'Brass', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0xC', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0xD', instrument: 'Piano', category: 'Keyboard', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0xE', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x20', location: 'Ganondorf Battle', slot: '0xF', instrument: 'Xylophone', category: 'Percussion', notes: ''},

    // Set 0x21 Ending sequence 1
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x0', instrument: 'Malon Voice', category: 'Voice', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x1', instrument: 'Malon Voice', category: 'Voice', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x2', instrument: 'Clarinet', category: 'Wind', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x4', instrument: 'Horn', category: 'Brass', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x5', instrument: 'Oboe', category: 'Wind', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x6', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x7', instrument: 'Violin', category: 'Strings', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x8', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0xC', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0xD', instrument: 'Bell', category: 'Percussion', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0xE', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x21', location: 'Ending sequence 1', slot: '0xF', instrument: 'Choir', category: 'Voice', notes: ''},

    // Set 0x22 Ending sequence 2
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x0', instrument: 'Koto', category: 'Strings', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x1', instrument: 'Ocarina', category: 'Wind', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x2', instrument: 'Bassoon', category: 'Wind', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x3', instrument: 'Oboe', category: 'Wind', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x4', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x5', instrument: 'Tambourine', category: 'Percussion', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x6', instrument: 'Harp', category: 'Strings', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x7', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x8', instrument: 'Malon Voice', category: 'Voice', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0xC', instrument: 'Pizzicato Strings', category: 'Strings', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0xD', instrument: 'Horn', category: 'Brass', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0xE', instrument: 'Choir', category: 'Voice', notes: ''},
    {setId: '0x22', location: 'Ending sequence 2', slot: '0xF', instrument: 'lolwut', category: 'Synth', notes: ''},

    // Set 0x23 Fanfares
    {setId: '0x23', location: 'Fanfares', slot: '0x0', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x1', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x3', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x5', instrument: 'Trumpet', category: 'Brass', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x6', instrument: 'Trumpet (low)', category: 'Brass', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x7', instrument: 'Tuba', category: 'Brass', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x8', instrument: 'Glockenspiel', category: 'Percussion', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0xC', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0xD', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x23', location: 'Fanfares', slot: '0xE', instrument: 'Harp', category: 'Strings', notes: ''},

    // Set 0x24 Owl
    {setId: '0x24', location: 'Owl', slot: '0x0', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x1', instrument: 'Oboe', category: 'Wind', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x2', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x3', instrument: 'Bassoon', category: 'Wind', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x4', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x5', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x6', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x7', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x8', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0x9', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0xA', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0xB', instrument: 'Strings', category: 'Strings', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0xC', instrument: 'Pizzicato Strings', category: 'Strings', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0xD', instrument: '', category: 'Empty', notes: ''},
    {setId: '0x24', location: 'Owl', slot: '0xE', instrument: 'Harp', category: 'Strings', notes: ''}
];

const percussionData = [{
    location: 'Hyrule Field',
    details: `00 - 0F: Bass drum
    10 - 11: Snare drum
    12 - 14: Snare drum 2
    15 - 20: Cymbal
    21 - 3F: Timpani`
  },
  {
    location: 'Market',
    details: `00 - 1A: Drum 1
    1B - 1C: Drum 2
    1D - 3F: Tambourine`
  },
  {
    location: 'Jabu-Jabu',
    details: `00 - 10: Bass drum
    11 - 3F: Snare drum`
  },
  {
    location: 'Fire Temple',
    details: `00 - 20: Cymbal
    21 - 3F: Drum`
  },
  {
    location: 'Spirit Temple',
    details: `00 - 11: Gong
    12 - 3F: Wind chime`
  },
  {
    location: 'Zora\'s Domain',
    details: `00 - 14: Low bongo
    15 - 27: Bongo
    28 - 3B: Clap
    3C - 3F: Shaker`
  }
];

let filteredData = [...instrumentData];

function getCategory(instrument) {
    if (!instrument || instrument === '') return 'Empty';
    
    const winds = ['Flute', 'Oboe', 'Clarinet', 'Bassoon', 'Ocarina', 'Harmonica', 'Accordion', 'Egyptian flute'];
    const strings = ['Strings', 'Pizzicato', 'Harp', 'Guitar', 'Bass guitar', 'Electric guitar', 'Banjo', 'Violin', 'Koto'];
    const brass = ['Horn', 'Trumpet', 'Tuba'];
    const percussion = ['Glockenspiel', 'Xylophone', 'Drum', 'Clap', 'Cymbal', 'Tambourine', 'Bell', 'Steel drum', 'Wind chime', 'Wood chime'];
    const keyboard = ['Piano', 'Harpsichord', 'Organ'];
    const voice = ['Choir', 'Voice', 'Malon Voice', 'Islamic chant'];
    const synth = ['Pad', 'Wind', 'Synth', 'Sounds', 'Creeking', 'Bell pad', 'Voice pad', 'lolwut'];
    
    const lowerInstrument = instrument.toLowerCase();
    
    if (winds.some(w => lowerInstrument.includes(w.toLowerCase()))) return 'Wind';
    if (strings.some(s => lowerInstrument.includes(s.toLowerCase()))) return 'Strings';
    if (brass.some(b => lowerInstrument.includes(b.toLowerCase()))) return 'Brass';
    if (percussion.some(p => lowerInstrument.includes(p.toLowerCase()))) return 'Percussion';
    if (keyboard.some(k => lowerInstrument.includes(k.toLowerCase()))) return 'Keyboard';
    if (voice.some(v => lowerInstrument.includes(v.toLowerCase()))) return 'Voice';
    if (synth.some(s => lowerInstrument.includes(s.toLowerCase()))) return 'Synth';
    
    return 'Synth';
}

function renderTable(data = filteredData) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    data.forEach(item => {
const row = document.createElement('tr');

row.innerHTML = `
    <td><span class="set-id">${item.setId}</span></td>
    <td class="location">${item.location}</td>
    <td><span class="slot">${item.slot}</span></td>
    <td class="instrument ${item.instrument ? '' : 'empty'}">${item.instrument || 'Empty'}</td>
    <td><span class="category cat-${item.category.toLowerCase()}">${item.category}</span></td>
    <td class="notes">${item.notes}</td>
`;

tbody.appendChild(row);
    });
    
    updateStats(data);
}

function renderPercussion() {
    const grid = document.getElementById('percussionGrid');
    grid.innerHTML = '';
    
    percussionData.forEach(item => {
const div = document.createElement('div');
div.className = 'percussion-item';
div.innerHTML = `
    <div class="percussion-location">${item.location}</div>
    <div class="percussion-details">${item.details}</div>
`;
grid.appendChild(div);
    });
}

function updateStats(data = filteredData) {
    const total = data.length;
    const filled = data.filter(item => item.instrument && item.instrument !== '').length;
    const empty = total - filled;
    
    document.getElementById('totalEntries').textContent = total;
    document.getElementById('filledSlots').textContent = filled;
    document.getElementById('emptySlots').textContent = empty;
}

function populateFilters() {
    const locationSelect = document.getElementById('locationFilter');
    const uniqueLocations = [...new Set(instrumentData.map(item => item.location))].sort();
    
    uniqueLocations.forEach(location => {
const option = document.createElement('option');
option.value = location;
option.textContent = location;
locationSelect.appendChild(option);
    });
}

function filterData() {
    const locationFilter = document.getElementById('locationFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchFilter = document.getElementById('searchFilter').value.toLowerCase();
    
    filteredData = instrumentData.filter(item => {
const matchesLocation = !locationFilter || item.location === locationFilter;
const matchesCategory = !categoryFilter || item.category === categoryFilter;
const matchesSearch = !searchFilter || 
    item.instrument.toLowerCase().includes(searchFilter) ||
    item.location.toLowerCase().includes(searchFilter) ||
    item.notes.toLowerCase().includes(searchFilter);

return matchesLocation && matchesCategory && matchesSearch;
    });
    
    renderTable(filteredData);
}


document.addEventListener('DOMContentLoaded', function() {
    populateFilters();
    renderTable();
    renderPercussion();
    document.getElementById('locationFilter').addEventListener('change', filterData);
    document.getElementById('categoryFilter').addEventListener('change', filterData);
    document.getElementById('searchFilter').addEventListener('input', filterData);
});