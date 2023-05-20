export default function Card() {
    return (
        <section class="border border-white rounded-xl p-8 m-5 hover:scale-105">
            <div class="flex flex-row -my-5">
                <div class="flex flex-col px-5">
                    <h1>Manchester City</h1>
                    <img src="https://i.imgur.com/BeclwOR.png" width="150px" class="pt-3" />
                    <h1 class="flex justify-center pt-3 text text-2xl">4</h1>
                </div>
                <div class="flex flex-col px-5">
                    <h1>Real Madrid</h1>
                    <img src="https://i.imgur.com/kE2SLbC.png" width="108px" class="pt-3" />
                    <h1 class="flex justify-center pt-3 text text-2xl">0</h1>
                </div>
            </div>
        </section>
    )
}