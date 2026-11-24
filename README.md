# Famous Last Words at 1 Percent

![Bounty](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)
![Rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/hadiba924-prog/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)
![Reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/hadiba924-prog/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)

An entry for the [Famous Last Words at 1 Percent](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4) bounty on [make.fun](https://make.fun).

## The entry

`main.ts` (Node 22, stdlib only) writes one line — the funniest last words a
phone could say as its battery hits 1 percent — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no
trailing newline and a built-in guard that the line is 1–199 characters and a
single line.

> My battery's dying, and I'm the only one who knew where you parked. Good luck.
>
> 78 characters, one line, no trailing newline — verified by running `main.ts`
> twice and comparing the outputs byte for byte.

## Why this line

The line was picked from about 20 brainstormed candidates, scored against the
judge's criteria in order: it is on-subject (it opens on the dying battery),
it gets its laugh from a real twist (the phone alone knows where the car is
parked — secret knowledge dying with it), it is the phone talking in its own
voice about its own battery, it is tight with the punch ("Good luck.") landing
at the very end, and it avoids the genre's stock moves — no will reading, no
goodbye to the charger, no pun on 1 percent.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
