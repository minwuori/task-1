([
  {
    block: 'product',
    mix: [ 
        { block: 'card', mods: { 'view': 'default'} },
        { block: 'card', mods: { 'border': 'all'} }],
    content: [
        {
        	elem: 'content',
        	mix: [
        			{ block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } },
        		],
        	content: [
        	    {
                    block: 'product',
                    elem: 'image',
                    content: 
                        { block: 'image' }
                }
            ]
        },
        {
        	elem: 'footer',
        	mix: [
        			{ block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }
        		],
        	content: [
        	    { 
        	        block: 'text', 
        	        mods: { 'view': 'primary'}, 
        	        mix: [ 
        	            { mods: { 'size': 'm'} }
        	       ],
        	       content: [
        	           { block: 'text', elem: 'word', elemMods: { 'width': 'l' } },
        	       ]
        	    },
        	    { 
        	        block: 'text', 
        	        mods: { 'view': 'primary'}, 
        	        mix: [ 
        	            { mods: { 'size': 's'} }
        	       ],
        	       content: [
        	           { block: 'text', elem: 'word', elemMods: { 'width': 'm' } },
        	       ]
        	    }
        	]
        }
    ]
}

]);
