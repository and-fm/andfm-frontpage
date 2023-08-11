import { TinaMarkdown } from 'tinacms/dist/rich-text'

const Heading = (props) => <h1 className='text-white font-bold text-4xl'>{props.children}</h1>
const Heading2 = (props) => <h2 className='text-white font-bold text-3xl'>{props.children}</h2>
const Heading3 = (props) => <h3 className='text-white font-bold text-2xl'>{props.children}</h3>
const Heading4 = (props) => <h4 className='text-white font-bold text-xl'>{props.children}</h4>
const Heading5 = (props) => <h5 className='text-white font-bold text-lg'>{props.children}</h5>
const Heading6 = (props) => <h6 className='text-white font-bold text-sm'>{props.children}</h6>

const Paragraph = (props) => <p className='text-zinc-200 text-lg'>{props.children}</p>
const Blockquote = (props) => <blockquote className='text-white'>{props.children}</blockquote>
const Code = (props) => <code className='text-white'>{props.children}</code>
const InlineCode = (props) => <code className='text-white'>{props.children}</code>
const ListItem = (props) => <li className='text-white'>{props.children}</li>
const OrderedList = (props) => <ol className='text-white'>{props.children}</ol>
const UnorderedList = (props) => <ul className='text-white'>{props.children}</ul>


export const RichTextRenderer = ({ content }) => {
    return <TinaMarkdown content={content} components={{
        p: Paragraph,
        h1: Heading,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        blockquote: Blockquote,
        code: Code,
        inlineCode: InlineCode,
        li: ListItem,
        ol: OrderedList,
        ul: UnorderedList,
    }} />
}
