import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
const TEMPLATE = [
	[
		"core/columns",
		{ backgroundColor: "yellow", verticalAlignment: "center" },
		[
			[
				"core/column",
				{ templateLock: "all" },
				[
					[
						"create-block/heroes-block",
						{ placeholder: "Enter side content..." },
					],
				],
			],
			["core/column", { templateLock: "all" }, [["core/image"]]],
		],
	],
];

registerBlockType("heroes-block/kb-example-container-block", {
	title: __("KB Container block", "heroes-block"),
	category: "design",

	edit({ className }) {
		return (
			<div className={className}>
				<InnerBlocks template={TEMPLATE} templateLock="all" />
			</div>
		);
	},

	save() {
		const blockProps = useBlockProps.save();
		return (
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
