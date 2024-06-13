import { routes } from '@/core/constants';
import Link from 'next/link';
import Tag, { ITag } from './Tag';

interface Props {
  tags: ITag[];
  currentTag?: ITag;
}

export default function PopularTags({ tags, currentTag }: Props) {
  if (tags.length === 0) return <></>;
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg">
      <h4 className="text-xl font-bold">Popular tags</h4>
      <p className="text-xs text-slate-500 mt-0.5">
        Browse digests by the most used tags
      </p>
      <div className="flex gap-2 mt-4 flex-wrap">
        {tags.map(({ id, name, slug, description }) => {
          const isActive = currentTag?.id === id;
          return (
            <Link
              key={id}
              href={
                isActive ? routes.DISCOVER : routes.TAG.replace(':slug', slug)
              }
            >
              <span className="flex flex-col items-start gap-&">
                <Tag
                  tag={{
                    id,
                    name,
                    slug,
                    description,
                  }}
                  size="default"
                  active={currentTag?.id === id}
                />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
