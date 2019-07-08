([
  {
    block: 'warning',
    mix: [ 
        { block: 'informer', mods: { 'view': 'default'} },
        { block: 'informer', mods: { 'border': 'all'} }],
    content: [
        {
            elem: 'content',
            mix: [
                    { block: 'informer', elem: 'content', elemMods: { 'distribute': 'center' } },
                    { block: 'informer', elem: 'content', elemMods: { 'space-a': 'xxl' } },
                ],
            content: [
                {
                    block: 'placeholder',
                    mods: { 'view': 'primary' },
                    mix: [ 
                        { block: 'placeholder', mods: { 'size': 'm'} },
                        { block: 'placeholder', mods: { 'indent-v': 'm'} }
                    ]
                },
                {
                    block: 'text',
                    mods: { 'view': 'primary' },
                    mix: [ 
                        { block: 'text', mods: { 'size': 'xl'} }],
                    content: [
                        { block: 'text', elem: 'word', elemMods: { 'width': 's' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 'l' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 'm' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 'm' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 's' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 'm' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 'l' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 's' } },
                        { block: 'text', elem: 'word', elemMods: { 'width': 'm' } },
                    ]
                },
            ]
        },
        {
            elem: 'button-wrapper',
            mix: [
                    { block: 'informer', elem: 'action', elemMods: { 'distribute': 'center' } },
                    { block: 'informer', elem: 'action', elemMods: { 'space-a': 'xl' } },
                ],
            content: [
                { block: 'button', mods: { 'size': 'l'} },
            ]
        }
    ]
}

]);
