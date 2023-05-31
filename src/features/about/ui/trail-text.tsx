import { Children, ReactNode, LegacyRef } from "react"
import { a, useTrail } from "@react-spring/web"

export default function TrailText({ ref, open, children }: { ref?: LegacyRef<HTMLDivElement> | undefined, open: boolean, children: ReactNode }) {
    const items = Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 500, friction: 100 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 60 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}
