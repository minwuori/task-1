module.exports = {
    block: 'payment',
    mix: [ { block: 'form', mods: { 'border': 'all'} } ],
    content: [
        {
        	elem: 'header',
        	mix: [
        			{ block: 'form', elem: 'item', elemMods: { 'space-v': 'l' } },
        			{ block: 'form', elem: 'item', elemMods: { 'space-h': 'xl' } },
        			{ block: 'form', elem: 'item', elemMods: { 'border': 'bottom' } },
        		],
        	content: {
                block: 'text',
                mods: { 'size': 'xxl' },
                content: { block: 'text', elem: 'word', elemMods: { 'width': 'l' } }
            }
        },
        {
        	elem: 'content',
        	mix: [
        			{ block: 'form', elem: 'item', elemMods: { 'space-v': 'xxxl' } },
        			{ block: 'form', elem: 'item', elemMods: { 'space-h': 'xl' } },
        			{ block: 'form', elem: 'item', elemMods: { 'border': 'bottom' } },
        		],
        	content: [
        		{
    				block: 'form',
    				elem: 'item',
    				mix: [
	        			{ elemMods: { 'indent-b': 'xl' } },
	        			{ elemMods: { 'distribute': 'between' } },
	        			{ elemMods: { 'vertical-align': 'center' } },
	        		],
	        		content: [
	        			{
		    				block: 'form',
		    				elem: 'label',
		    				mix: [
			        			{ block: 'form', elem: 'item', elemMods: { 'width': 'default' } },
			        			{ block: 'text', mods: { 'size': 'l' } },
			        			{ block: 'text', mods: { 'view': 'primary' } },
			        		],
                            content: { block: 'text', elem: 'word', elemMods: { 'width': 'l' } }
		    			},
		    			{
		    				block: 'form',
		    				elem: 'control',
		    				tag: 'input'
		    			},
	        		]
    			},
    			{
    				block: 'form',
    				elem: 'item',
    				mix: [
	        			{ elemMods: { 'indent-b': 'xl' } },
	        			{ elemMods: { 'distribute': 'between' } },
	        			{ elemMods: { 'vertical-align': 'center' } },
	        		],
	        		content: [
	        			{
		    				block: 'form',
		    				elem: 'label',
		    				mix: [
			        			{ block: 'form', elem: 'item', elemMods: { 'width': 'default' } },
			        			{ block: 'text', mods: { 'size': 'l' } },
			        			{ block: 'text', mods: { 'view': 'primary' } },
			        		],
                            content: { block: 'text', elem: 'word', elemMods: { 'width': 'l' } }
		    			},
		    			{
		    				block: 'form',
		    				elem: 'control',
		    				tag: 'input'
		    			},
	        		]
    			},
        	]
        },
        {
        	elem: 'footer',
        	mix: [
        			{ block: 'form', elem: 'item', elemMods: { 'distribute': 'between' } },
        			{ block: 'form', elem: 'item', elemMods: { 'vertical-align': 'center' } },
        			{ block: 'form', elem: 'item', elemMods: { 'border': 'bottom' } },
        			{ block: 'form', elem: 'item', elemMods: { 'space-v': 'l' } },
        			{ block: 'form', elem: 'item', elemMods: { 'space-h': 'xl' } },
        		],
        	content: [
    			{
    				block: 'text',
    				mix: [
	        			{ mods: { 'size': 'l' } },
	        			{ mods: { 'view': 'primary' } },
	        		],
                    content: { block: 'text', elem: 'word', elemMods: { 'width': 'l' } }
    			},
    			{
    				block: 'button'
    			},
    		]
        },
    ]
};
